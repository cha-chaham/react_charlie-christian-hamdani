import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/layout";
import Button from "../components/button";
import { Input, TextArea } from "../components/input"; // named import
// import Input from "../components/input"; import default
import { LoadingSpinner } from "../components/loading";

export default function Index() {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData2();
  }, []);

  function fetchData() {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((response) => setDatas(response))
      .catch((error) => alert(error.toString()))
      .finally(() => setIsLoading(false));
  }

  function fetchData2() {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setDatas(response.data))
      .catch((error) => alert(error.toString))
      .finally(() => setIsLoading(false));
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        datas.map((data) => (
          <div key={data.id} className="border-b mb-3 pb-3">
            <h2 className="font-bold text-xl">{data.title}</h2>
            <p>{data.body}</p>
          </div>
        ))
      )}
    </Layout>
  );
}
