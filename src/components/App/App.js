import React, { useEffect, useState } from "react";
import "./App.css";
import { getUrls, postUrls } from "../../apiCalls";
import UrlContainer from "../UrlContainer/UrlContainer";
import UrlForm from "../UrlForm/UrlForm";

const App = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    getUrls().then((data) => setUrls(data.urls));
  }, []);

  const addNewUrl = (newUrl) => {
    postUrls(newUrl).then(res => res.json()).then(data => setUrls([...urls, data]))
  };

  return (
    <main className="App">
      <header>
        <h1>URL Shortener</h1>
        <UrlForm addNewUrl={addNewUrl} />
      </header>
      <UrlContainer urls={urls} />
    </main>
  );
};

export default App;
