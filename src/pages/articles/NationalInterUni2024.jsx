import React from "react";
import CreateArticle from "../../components/articles/CreateArticle";

const content = `
  Hello there. This is a multi line comment.
`

const article = {
  title: "South Zonals 2024",
  date: "March 16th, 2024",
  author: "Kalki Eshwar D",
  img: "../assets/images/articles/National-Inter-Uni-2024.png",
  content: content,
}

const NationalInterUni2024 = () => {
  return (
    <div>
      <CreateArticle article={article}/>
    </div>
  );
};

export default NationalInterUni2024;
