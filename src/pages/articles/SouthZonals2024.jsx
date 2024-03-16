import React from "react";
import CreateArticle from "../../components/articles/CreateArticle";

const article = {
  title: "South Zonals 2024",
  date: "March 16th, 2024",
  author: "Kalki Eshwar D",
  content: "Hello there"
}

const SouthZonals2024 = () => {
  return (
    <div>
      <CreateArticle article={article}/>
    </div>
  );
};

export default SouthZonals2024;
