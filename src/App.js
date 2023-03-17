import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from 'react';
import Home from "../src/Pages/Home";
import ArticlePage from "./Components/ArticlePage";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";


function App() {
  const [articles, setArticles] = useState([]);


  return (
    <Router>
      <div className="app__container">
        <div className="sidebar__container">
          <Sidebar className="sidebar" />
        </div>

        <div className="content__container">
          <Header />
          <Routes>
            <Route path="/" element={<Home articles={articles} setArticles={setArticles} />} />
            <Route path="/article/:id" element={<ArticlePage articles={articles} setArticles={setArticles}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
 