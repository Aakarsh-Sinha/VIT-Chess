import React from "react";
import ArticleHead from "./ArticleHead";
import ArticleContent from "./ArticleContent";
import "../css/articles/articlePage.css";

const CreateArticle = (props) => {
  return <div class="article">
    <div class="article-page, container">
      <table>
        <tr><td id="article-head">
          <ArticleHead title={props.article.title} date={props.article.date} author={props.article.author} subtitle={props.article.subtitle} img={props.article.img} imgcaption={props.article.imgcaption}/>
        </td></tr>
        <tr><td id="article-body">
          <ArticleContent content={props.article.content}/>
        </td></tr>
      </table>
    </div>
  </div>
};

export default CreateArticle;
