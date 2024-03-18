import React from "react";
import "../css/articles/articleHead.css";

function ArticleHead(props) {
    return (
        <div>
            <table>
                <div class="article-head">
                    <tr><td id="article-title">{props.title}</td></tr>
                    <tr class="article-details"><td id="article-date">{props.date}</td><td id="article-author">{props.author}</td></tr>
                </div>
                <tr class="article-sub-head"><td>{props.img}</td></tr>
                <tr class="article-sub-head"><td id="article-img-caption">{props.imgcaption}</td></tr>
                <tr class="article-sub-head"><td id="article-subtitle">{props.subtitle}</td></tr>
            </table>
        </div>
    );
}

export default ArticleHead;