import React from "react";
import ContactCard from "../components/ContactCard";

const styling = {
  display: "flex",
  gap: "50px",
};

const Contact = () => {
  return (
    <div className="contact" style={styling}>
      <ContactCard title="Email us" text="vitcl.support@gmail.com" />
      <ContactCard title="Call us" text="1234567890" />
    </div>
  );
};

export default Contact;
