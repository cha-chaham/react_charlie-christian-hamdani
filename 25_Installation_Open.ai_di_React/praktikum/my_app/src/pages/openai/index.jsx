import { useEffect, useState } from "react";
import "@/styles/App.css";
import OpenAI from "openai";
import clsx from "clsx";

import Layout from "@/components/layout";
import { Button } from "@/components/button";
import { Input, TextArea } from "@/components/input"; // named import
import { LoadingSpinner } from "@/components/loading";
import Swal from "@/utils/swal";
import { RiOpenaiFill, RiUser3Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const APIkey = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: APIkey,
  dangerouslyAllowBrowser: true,
});

export default function Index() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
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
        messages: [{ role: "user", content: prompt }],
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
                      <RiOpenaiFill />
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
