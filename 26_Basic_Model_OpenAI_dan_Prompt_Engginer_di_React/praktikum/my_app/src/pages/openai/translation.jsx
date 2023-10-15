import { useEffect, useState } from "react";
import "@/styles/App.css";
import OpenAI from "openai";
import clsx from "clsx";

import Layout from "@/components/layout";
import { Button } from "@/components/button";
import { Input, TextArea } from "@/components/input"; // named import
import { LoadingSpinner } from "@/components/loading";
import Swal from "@/utils/swal";
import { RiTranslate2, RiUser3Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const APIkey = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: APIkey,
  dangerouslyAllowBrowser: true,
});

export default function Translation() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Anda akan diberikan kalimat dalam bahasa Indonesia, dan tugas anda adalah menerjemahkannya ke dalam bahasa Inggris",
          },
          {
            role: "assistant",
            content:
              "Saya akan membantu anda melakukan penerjemahan dari bahasa indonesia ke bahasa inggris",
          },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      setResults(response.choices);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    setPrompt("");
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: "translate:" + prompt }],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout>
      <div className="w-full h-screen py-4 px-8 xl:py-[1rem] xl:px-[25rem] flex flex-col ">
        <div className="text-center mb-8">
          <div className=" text-2xl font-bold">
            Terjemahan dari Bahasa Indonesia ke Bahasa Inggris
          </div>
          <p>
            AI akan membantu anda melakukan penerjemahan dari bahasa indonesia
            ke bahasa inggris. Anda hanya perlu memberikan kalimat yang ingin
            anda terjemahkan dalam bahasa Indonesia, maka AI akan memberikan
            jawaban dalam bahasa Inggris
          </p>
        </div>
        <div className="grow flex flex-col overflow-auto">
          {results.map((result) => (
            <div
              className={clsx(
                "chat",
                result.message.role === "assistant" ? "chat-start" : "chat-end"
              )}
            >
              <div className="chat-image avatar">
                <div className="w-10">
                  <IconContext.Provider value={{ size: "full" }}>
                    {result.message.role === "assistant" ? (
                      <RiTranslate2 />
                    ) : (
                      <RiUser3Fill />
                    )}
                  </IconContext.Provider>
                </div>
              </div>
              <div
                className="chat-header"
                style={{ textTransform: "capitalize" }}
              >
                {result.message.role}
              </div>
              <p className="chat-bubble" key={result.message.content}>
                {result.message.content}
              </p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <Input
            placeholder="Insert prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button
            label={isLoading ? <LoadingSpinner /> : "Submit"}
            type="submit"
            disabled={isLoading}
            aria-disabled={isLoading}
          />
        </form>
      </div>
    </Layout>
  );
}
