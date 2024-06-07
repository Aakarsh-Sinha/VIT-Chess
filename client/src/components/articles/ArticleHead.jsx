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
                <div id="article-sub-head">
                    <div class="sub-head-contents">
                        <tr><td id="article-image">{props.img}</td></tr>
                    </div>
                    <div class="sub-head-contents">
                        <tr><td id="article-img-caption">{props.imgcaption}</td></tr>
                    </div>
                    <div  class="sub-head-contents">
                        <tr><td id="article-subtitle">{props.subtitle}</td></tr>
                    </div>
                </div>
            </table>
        </div>
    );
}

export default ArticleHead;