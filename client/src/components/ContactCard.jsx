import React from "react";
import "./css/card.css";
import "./css/contactCard.css";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <div id="card-title">{props.title}</div>
      <div id="card-text">{props.text}</div>
      <button onClick={copyText(props.text)}>Copy</button>
    </div>
  );
}

function copyText(text) {
    navigator.clipboard.writeText(text);
}

export default ContactCard;
