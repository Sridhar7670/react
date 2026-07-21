import { useEffect, useState } from 'react';
import { FaMapLocationDot, FaEnvelope } from 'react-icons/fa6';
import Button from '../components/Button/Button';
import { SOCIAL_LINKS } from '../data/socialLinks';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

// Web3Forms access keys are public by design; the env var lets deployments override it.
const WEB3FORMS_ACCESS_KEY =
  process.env.REACT_APP_WEB3FORMS_KEY || '54c8ded6-2d45-4771-94af-d2bcb502af33';

const STATUS_CLEAR_MS = 5000;

const EMPTY_FORM = { name: '', email: '', phone: '', message: '' };

const ContactForm = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // One reveal per column so the info slides in just before the form.
  const [infoRef, isInfoVisible] = useScrollReveal();
  const [formRef, isFormVisible] = useScrollReveal();

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
      {/* These used to use animate.css delay classes, which start counting
          from page load — so the animation had already finished long before
          anyone scrolled this far down. The reveal hook waits for the user. */}
      <div
        ref={infoRef}
        className={`contact-info reveal reveal-left ${isInfoVisible ? 'is-visible' : ''}`}
      >
        <h3 className="attractive-lines">Let's get in touch</h3>
        <p className="thanking-lines">
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
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size="2em" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        ref={formRef}
        className={`contact-form reveal reveal-right ${isFormVisible ? 'is-visible' : ''}`}
      >
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
          {/* Uses the shared Button component rather than its own styles, so
              every button on the site now goes through one place. */}
          <Button type="submit" variant="light" size="large" className="btn-pill" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
