import React from "react";
import "./Contact.css";

import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "223dab59-def9-474d-bbfc-dfba422fb2cd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="themePattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s talk</h1>

          <p>
            I&apos;m ready to join immediately, so feel free to sent me a
            message about anything that you want me to work on. You can contact
            anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mailIcon" /> <p>dhanushsrs@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="callIcon" /> <p>+91 9942576186</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="locationIcon" />{" "}
              <p>Dharmapuri, Tamil Nadu</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
          />

          <label htmlFor="Email">Your Email</label>
          <input
            type="text"
            id="Email"
            placeholder="Enter your Email"
            name="email"
          />

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
