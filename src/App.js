import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "../src/Pages/Home";
import ArticlePage from "./Components/ArticlePage";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
      <div className="app__container">
        <div className="sidebar__container">
          <Sidebar classNam="sidebar" />
        </div>
        <div className="content__container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
