import React from "react";
import "./css/studyBoard.css";


function StudyBoard(props) {
    return (
        <div>
            <iframe class="study-board" src={props.url} frameborder={0} />
        </div>
    );
}

export default StudyBoard;