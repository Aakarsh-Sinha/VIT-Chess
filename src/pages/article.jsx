import React from "react";
import ArticleHead from "../components/articles/ArticleHead"
import ArticleContent from "../components/articles/ArticleContent";


/***
 * Features in an article:
 * Article Head
 * -- 
*/

function Article(props) {
    return (
    <div className="article">
        <ArticleHead title={props.title} date={props.date} author={props.author} subtitle={props.subtitle}/>
        <ArticleContent content={props.content}/>
    </div>
    );
}

export default Article;