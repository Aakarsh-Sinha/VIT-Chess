import React from "react";
import "../css/articles/articleHead.css";

function ArticleHead(props) {
    return (
        <div class="article-head">
            <table>
                <tr><td class="article-title">{props.title}</td></tr>
                <tr><td>{props.date}</td><td>{props.author}</td></tr>
                <tr><td><img src={props.img} alt="Main image of article"></img></td></tr>
                <tr><td>{props.subtitle}</td></tr>
            </table>
        </div>
    );
}

export default ArticleHead;