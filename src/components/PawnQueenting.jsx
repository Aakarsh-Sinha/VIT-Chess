import React from "react";
import img_black_pawn from "./assets/images/black-pawn.png";
import img_black_queen from "./assets/images/black-queen.png"; 
import "./css/pawnQueening.css";

const PawnQueening = () => {
    return (
        <div id="animation">
            <div class="image-container">
                <img src={img_black_pawn} alt="Black Pawn" class="image image-1" />
                <img src={img_black_queen} alt="Black Queen" class="image image-2" />
            </div>
        </div>
    );
}

export default PawnQueening;
