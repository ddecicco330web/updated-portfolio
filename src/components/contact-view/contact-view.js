import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactView = () => {
  const [showErrors, setShowErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init('B9AtGVDb0s4A6iO5I');
    const inputs = document.querySelectorAll('.contact__form-input');

    const handleInvalid = (e) => {
      e.preventDefault();
      setShowErrors((prevState) => ({ ...prevState, [e.target.name]: true }));
    };

    inputs.forEach((input) => {
      input.addEventListener('invalid', handleInvalid);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('invalid', handleInvalid);
      });
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuccess = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setMessage('Message sent.');
  };

  const handleError = (error) => {
    setMessage('Something went wrong. Please try again later.');
    console.error('Email error: ' + error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const form = document.querySelector('.contact__form');

    if (form.checkValidity()) {
      setShowErrors({ name: false, email: false, message: false });

      emailjs
        .sendForm(
          'service_w4iphl5',
          'template_ykzxhcg',
          form,
          'B9AtGVDb0s4A6iO5I'
        )
        .then(
          (result) => {
            handleSuccess();
          },
          (error) => {
            handleError(error);
          }
        );
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading-2 heading-2--section-title mb-title">
        Contact Me
      </h2>

      <form className="contact__form">
        {/* NAME INPUT */}
        <div className="contact__form-group contact__form-group--name">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="contact__form-input"
            required
          />
          <label htmlFor="name" className="contact__form-label">
            Name *
          </label>
          <p
            className={`paragraph paragraph--primary contact__form-error contact__form-error--name ${
              showErrors.name && 'contact__form-error--visible'
            }`}
          >
            Please enter your name.
          </p>
        </div>

        {/* EMAIL INPUT */}
        <div className="contact__form-group contact__form-group--email">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="contact__form-input"
            required
          />
          <label htmlFor="email" className="contact__form-label">
            Email *
          </label>
          <p
            className={`paragraph paragraph--primary contact__form-error contact__form-error--email ${
              showErrors.email && 'contact__form-error--visible'
            }`}
          >
            Please enter a valid email address.
          </p>
        </div>

        {/* MESSAGE INPUT */}
        <div className="contact__form-group contact__form-group--message">
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="contact__form-input contact__form-input--message"
            required
          />
          <label htmlFor="message" className="contact__form-label" required>
            Message *
          </label>
          <p
            className={`paragraph paragraph--primary contact__form-error contact__form-error--message ${
              showErrors.message && 'contact__form-error--visible'
            }`}
          >
            Please enter a message.
          </p>
        </div>

        {/* FORM MESSAGE */}
        <div
          className={`contact__form-message ${
            message && 'contact__form-message--visible'
          }`}
        >
          <p className="paragraph paragraph--primary">{message}</p>
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              setMessage('');
            }}
          >
            X
          </button>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="contact__form-btn"
          onClick={handleSubmit}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactView;
