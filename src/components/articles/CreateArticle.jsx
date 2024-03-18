import React from "react";
import ArticleHead from "./ArticleHead";
import ArticleContent from "./ArticleContent";
import "../css/articles/articlePage.css";

const CreateArticle = (props) => {
  return <div class="article-page">
    <table>
      <tr><td>
        <ArticleHead title={props.article.title} date={props.article.date} author={props.article.author} subtitle={props.article.subtitle} img={props.article.img}/>
      </td></tr>
      <tr><td>
        <ArticleContent content={props.article.content}/>
      </td></tr>
    </table>
  </div>
};

export default CreateArticle;
