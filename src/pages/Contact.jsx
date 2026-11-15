import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo only: no backend connected yet
    alert("Thank you for your message!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* Contact Banner */}
      <section className="contact-banner">
        <div className="contact-banner-content">
          <span>WE'D LOVE TO HEAR FROM YOU</span>
          <h1>Contact Us</h1>
          <p>
            Have a question about adoption, pet release,
            or volunteering? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="contact-info-grid">

          {/* Left Image */}
          <div className="contact-image">
            <img
              src="/images/contact2.jpg"
              alt="Pet Heaven animal shelter"
            />
          </div>

          {/* Right Information */}
          <div className="contact-info-card">
            <span className="contact-label">COME VISIT US</span>
            <h2>Visit Pet Heaven</h2>
            <p className="contact-intro">
              Whether you have questions or simply want to
              learn more about our rescued pets, feel free
              to get in touch with our team.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <h3>Our Address</h3>
                <p>Singapore</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <h3>Phone Number</h3>
                <p>+65 XXXX XXXX</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h3>Email Address</h3>
                <p>info@petheaven.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div>
                <h3>Opening Hours</h3>
                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p>Weekends & Public Holidays: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-heading">
          <span className="contact-label">GET IN TOUCH</span>
          <h2>Send Us a Message</h2>
          <p>
            Have something on your mind? Fill out the form
            below and our team will be happy to assist you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-subject">Subject</label>
            <select
              id="contact-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="Adoption">Pet Adoption</option>
              <option value="Release">Pet Release</option>
              <option value="Volunteer">Volunteering</option>
              <option value="General">General Inquiry</option>
            </select>
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit-btn">
            Send Message
          </button>
        </form>
      </section>

    </main>
  );
}

export default Contact;