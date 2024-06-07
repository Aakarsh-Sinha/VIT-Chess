import React from "react";
import ArticleHead from "../components/articles/ArticleHead"
import ArticleContent from "../components/articles/ArticleContent";
import "src/components/css/articles/articlePage.css"

function Article(props) {
    return (
    <div id="article">
        <ArticleHead title={props.title} date={props.date} author={props.author} subtitle={props.subtitle}/>
        <ArticleContent content={props.content}/>
    </div>
    );
}

export default Article;