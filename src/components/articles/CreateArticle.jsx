import React from "react";
import ArticleHead from "./ArticleHead";
import ArticleContent from "./ArticleContent";

const CreateArticle = (article) => {
  return <div class="article-page">
    <ArticleHead title={article.title} date={article.date} author={article.author} subtitle={article.subtitle}/>
    <ArticleContent content={article.content}/>
  </div>
};

export default CreateArticle;
