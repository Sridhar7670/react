import { useState } from "react";
import {FaMapLocationDot,FaEnvelope,FaPhoneVolume,FaFacebook,FaInstagram,FaTwitter,FaLinkedinIn,} 
from "react-icons/fa6";
import './contact.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "",email: "",phone: "",message: "",});
    const handleChange = (e) => {const { name, value } = e.target;setFormData((prev) => ({...prev,[name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <div className="form" id="contact">
      <div className="contact-info">
        <h3 className="attractive-lines">Let's get in touch</h3>
        <p className="thanking-lines">
          Your interest means a lot to me. Feel free to reach out if you have
          any questions or just want to connect!
        </p>

        <table>
          <tbody>
            <tr>
              <td>
                <FaMapLocationDot size="2em" />
              </td>
              <td>Hyderabad, Telangana, India</td>
            </tr>
            <tr>
              <td>
                <FaEnvelope size="2em" />
              </td>
              <td>Sridharnani080@gmail.com</td>
            </tr>
            <tr>
              <td>
                <FaPhoneVolume size="2em" />
              </td>
              <td>(+91) 7670893965</td>
            </tr>
          </tbody>
        </table>

        <div className="connect">
          <h3>Connect with me</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/sridhar.nani.129"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size="2em" />
            </a>
            <a
              href="https://www.instagram.com/sridhar.rdy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size="2em" />
            </a>
            <a
              href="https://x.com/Sridhar67956954"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size="2em" />
            </a>
            <a
              href="https://www.linkedin.com/in/sridhar-reddy-37b63a203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size="2em" />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <span className="circle one"></span>
        <span className="circle two"></span>

        <form onSubmit={handleSubmit}>
          <h3 className="title">Contact me</h3>

          <div className="input-container">
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="input"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              className="input"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="input"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
