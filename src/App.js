import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "../src/Pages/Home";
import ArticlePage from "./Components/ArticlePage";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";


function App() {
  return (
    <Router>
      <div className="app__container">
        <div className="sidebar__container">
          <Sidebar className="sidebar" />
        </div>
        <div className="wrapper">
          <div className="content__container">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:id" element={<ArticlePage />} />
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}



export default App;
