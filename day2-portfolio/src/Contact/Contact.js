import { useState } from "react";
import {FaMapLocationDot,FaEnvelope,FaPhoneVolume,FaFacebook,FaInstagram,FaTwitter,FaLinkedinIn,} 
from "react-icons/fa6";
import './contact.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({ 
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "54c8ded6-2d45-4771-94af-d2bcb502af33",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form" id="contact">
      <div className="contact-info">
        <h3 className="attractive-lines animate__animated animate__fadeInLeft wow animate__delay-1s">Let's get in touch</h3>
        <p className="thanking-lines animate__animated animate__fadeInLeft wow animate__delay-1s">
          Your interest means a lot to me. Thanks for visiting my Portfolio Feel free to reach out if you have
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
        <h3 style={{ color: 'rgba(79, 70, 229, 1)' }}>Lets Connect:</h3>
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

          {submitStatus === "success" && (
            <div className="form-success">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="form-error">
              Oops! Something went wrong. Please try again later.
            </div>
          )}

          <div className="input-container">
            <input  type="hidden" name="access_key" value="54c8ded6-2d45-4771-94af-d2bcb502af33"
            />
            <input type="text" className="input" name="name" placeholder="Name" value={formData.name}
              onChange={handleChange}
              required
            />
            <input type="email" className="input" name="email" placeholder="E-Mail" value={formData.email}
              onChange={handleChange}
              required
            />
            <input type="tel" className="input" name="phone" placeholder="Phone"  value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea  className="input"  name="message"   placeholder="Message" value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn"> Submit </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
