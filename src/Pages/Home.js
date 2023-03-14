import "./Home.css";
import Header from "../Header/Header";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ArticleCard from "../Components/ArticleCard";
import { getArticles } from "../Api/Api";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles();
        setArticles(response.data.articles);
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, [setArticles]);


  return (
    <div className="home">
      <Header />
      <div className="home-sidebar-articles__container">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="home-articles__container">
        {console.log(articles)}
          {
          articles.map((article) => {

            return <ArticleCard key={article.id} articles={article} />
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

// const fetchData = async () => {
//     try {
//       const response = await getArticles();
//       setArticles(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };
