import React from "react";
import "./css/quote.css";

export default function Quote() {
  return (
    <div className="center">
      <p className="quote">
        <i>
          You must take your opponent into a deep dark forest where 2+2 = 5 and
          the path leading out is only wide enough for one{" "}
        </i>
      </p>
      <p className="author">-Mikhail Tal</p>
    </div>
  );
}
