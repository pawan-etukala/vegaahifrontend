import React, { useState } from "react";
import "../css/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    txtName: "",
    txtEmail: "",
    txtPhone: "",
    txtMsg: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="contact-us-container">
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src={"https://image.ibb.co/kUagtU/rocket_contact.png"}
            alt="rocket_contact"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                  value={formData.txtName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  value={formData.txtEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  value={formData.txtPhone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btnContact">
                  Send Message
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}
                  value={formData.txtMsg}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
