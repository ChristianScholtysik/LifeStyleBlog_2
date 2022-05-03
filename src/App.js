import "./App.css";
import { client } from "./Client";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Posts from "./Components/Posts";
import Post from "./Components/Post";

function App() {
  const [data, setData] = useState([]);

  console.log(data.items);
  useEffect(() => {
    client
      .getEntries()
      .then((res) => {
        setData(res);
      })
      .catch(console.error);
  }, []);
  // console.log(client);
  const articles = data.items;

  return (
    <>
      {articles ? (
        <Routes>
          <Route path="/" element={<Posts data={articles} />} />
          <Route path=":id" element={<Post data={articles} />} />
        </Routes>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
