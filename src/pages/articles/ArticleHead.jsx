import React from "react";
import "../css/articleHead.css";

function ArticleHead(props) {
    return (
        <div class="article-head">
            <table>
                <td>{props.title}</td>
                <td>{props.img}</td>
            </table>
        </div>
    );
}