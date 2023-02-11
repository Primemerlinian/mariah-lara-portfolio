import React from "react";

function Contact() {
  return (
    <div className="contact-container2">
      <h1>Contact Me!</h1>
      <div className="contact-container">
        <a className="contacttext" href="mailto:mwatson0518@gmail.com">
          Send an email to me!
        </a>
        <a className="contacttext" href="https://github.com/Primemerlinian">
          Visit My GitHub!
        </a>
        <a
          className="contacttext"
          href="https://www.linkedin.com/in/mariah-lara/"
        >
          Visit My LinkedIn!
        </a>
        <a className="contacttext" href="tel:8634476309">
          Call me!
        </a>
        <a className="contacttext" href="sms:8634476309">
          Text me!
        </a>
      </div>
    </div>
  );
}

export default Contact;
