import React from "react";
import "./css/studyBoard.css";


function StudyBoard(props) {
    return (
        <div class="study-board">
            <iframe width="600" height="371" src={props.url} frameborder={0} />
        </div>
    );
}

export default StudyBoard;