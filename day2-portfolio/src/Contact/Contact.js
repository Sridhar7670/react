import { useEffect, useState } from 'react';
import {
  FaMapLocationDot,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa6';
import './Contact.css';

// Web3Forms access keys are public by design; the env var lets deployments override it.
const WEB3FORMS_ACCESS_KEY =
  process.env.REACT_APP_WEB3FORMS_KEY || '54c8ded6-2d45-4771-94af-d2bcb502af33';

const STATUS_CLEAR_MS = 5000;

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sridhar-reddy-37b63a203/', icon: <FaLinkedinIn size="2em" /> },
  { label: 'Instagram', href: 'https://www.instagram.com/sridhar.rdy/', icon: <FaInstagram size="2em" /> },
  { label: 'Twitter / X', href: 'https://x.com/Sridhar67956954', icon: <FaTwitter size="2em" /> },
  { label: 'Facebook', href: 'https://www.facebook.com/sridhar.nani.129', icon: <FaFacebook size="2em" /> },
];

const ContactForm = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (!submitStatus) return undefined;
    const timeout = setTimeout(() => setSubmitStatus(null), STATUS_CLEAR_MS);
    return () => clearTimeout(timeout);
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData(EMPTY_FORM);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form" id="contact">
      <div className="contact-info">
        <h3 className="attractive-lines animate__animated animate__fadeInLeft animate__delay-1s">Let's get in touch</h3>
        <p className="thanking-lines animate__animated animate__fadeInLeft animate__delay-1s">
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
              <td>sridharnani080@gmail.com</td>
            </tr>
          </tbody>
        </table>

        <div className="connect">
          <h3 style={{ color: 'rgba(79, 70, 229, 1)' }}>Lets Connect:</h3>
          <div className="social-icons">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-form">
        <span className="circle one"></span>
        <span className="circle two"></span>

        <form onSubmit={handleSubmit}>
          <h3 className="title">Contact me</h3>

          {submitStatus === 'success' && (
            <div className="form-success">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-error">
              Oops! Something went wrong. Please try again later.
            </div>
          )}

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
          <button type="submit" disabled={isSubmitting} className="btn">
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
