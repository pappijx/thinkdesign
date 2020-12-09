import React, { useState } from "react";
import "./Contact.css";
import db from "./firebase";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been sent");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <form id="contact-form" onSubmit={handleSubmit} className="form">
        <h1>Contact Form</h1>
        <div className="form-group">
          <input
            autocomplete="off"
            required
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="label">
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="error">1</div>
        </div>

        <div className="form-group">
          <input
            autocomplete="off"
            className="form-control"
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="label">
            <label htmlFor="email">Email</label>
          </div>
          <div className="error">1</div>
        </div>

        <div className="form-group">
          <input
            autocomplete="off"
            className="form-control"
            required
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="label">
            <label htmlFor="name">Message </label>
          </div>
          <div className="error">1</div>
        </div>
        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
