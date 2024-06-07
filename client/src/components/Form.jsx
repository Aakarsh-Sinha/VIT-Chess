import "./css/form.css";
import React, { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({
    firstName: "",
    userName: "",
    email: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.userName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="container_form">
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid && (
            <div className="success-message">
              <h3>
                {" "}
                Welcome {values.firstName} {values.userName}{" "}
              </h3>
              <div> Your registration was successful! </div>
            </div>
          )}
          {!valid && (
            <input
              class="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.firstName && (
            <span id="first-name-error">Please enter a first name</span>
          )}

          {!valid && (
            <input
              class="form-field"
              type="text"
              placeholder="Username"
              name="userName"
              value={values.userName}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.userName && (
            <span id="username-error">Please enter a username</span>
          )}

          {!valid && (
            <input
              class="form-field"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.email && (
            <span id="email-error">Please enter an email address</span>
          )}
          {!valid && (
            <button class="form-field" type="submit">
              Register
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
