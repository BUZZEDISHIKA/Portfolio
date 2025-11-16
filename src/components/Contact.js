import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "ishika_2003",     // <-- replace
      "template_mp91x19",    // <-- replace
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      "WXVYx1Hw1WExqOGgA"      // <-- replace
    )
    .then(() => {
      alert("Message Sent Successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
          <p>Get in touch for collaborations or just to say <b>Hello</b></p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <ul className="contact-details">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>{portfolioData.personalInfo.location}</p>
                </div>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>{portfolioData.personalInfo.email}</p>
                </div>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>{portfolioData.personalInfo.phone}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
