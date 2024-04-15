import React from "react";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return ( <div className="container">
    <div class="container">
      <ContactCard title="Email us" text="vitcl.support@gmail.com"/>
      <ContactCard title="Call us" text="1234567890" />
    </div>
    <div class="container">
    </div>
  </div>

  );
};

export default Contact;
