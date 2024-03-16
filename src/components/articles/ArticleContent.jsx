import React from "react";
import "../css/articles/articleContent.css";

function ArticleContent(props) {
    return (
        <div class="article-content">
            <p>{props.content}</p>
        </div>
    );
}

export default ArticleContent;