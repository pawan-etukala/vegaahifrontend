import React, { useState } from "react";
import "../css/ContactUs.css";
import Swal from "sweetalert";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    txtName: "",
    txtEmail: "",
    txtPhone: "",
    txtMsg: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Web3Forms endpoint and Access Key
    const endpoint = "https://api.web3forms.com/submit";
    const accessKey = "0c5d4a8f-1122-4a77-909a-5e8b9dad6b13"; // Replace with your actual access key

    try {
      const response = await axios.post(endpoint, {
        access_key: accessKey,
        name: formData.txtName,
        email: formData.txtEmail,
        phone: formData.txtPhone,
        message: formData.txtMsg,
        subject: "New Contact Form Submission",
      });

      if (response.status === 200) {
        Swal("Success!", "Your message has been sent successfully.", "success");
        setFormData({
          txtName: "",
          txtEmail: "",
          txtPhone: "",
          txtMsg: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal("Error!", "Failed to send your message. Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
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
                <button type="submit" className="btnContact" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
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
