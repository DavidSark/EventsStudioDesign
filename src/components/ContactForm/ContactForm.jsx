import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      sendEmail();
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(true);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'Le nom est requis.';
    }
    if (!data.email.trim()) {
      errors.email = 'L\'email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(data.email.trim())) {
      errors.email = 'L\'email n\'est pas valide.';
    }
    if (!data.subject.trim()) {
      errors.subject = 'Le sujet est requis.';
    }
    if (!data.message.trim()) {
      errors.message = 'Le message est requis.';
    }
    return errors;
  };

  const sendEmail = () => {
    axios.post('greyyyphe@gmail.com', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && (
          <div className="error">{formErrors.name}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <div className="error">{formErrors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="subject">Sujet :</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        {formErrors.subject && (
          <div className="error">{formErrors.subject}</div>
        )}
      </div>
      <div>
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {formErrors.message && (
          <div className="error">{formErrors.message}</div>
        )}
      </div>
      {formSubmitted ? (
        <div className="success-message">
          Votre message a bien été envoyé.
        </div>
      ) : (
        <button type="submit">Envoyer</button>
      )}
    </form>
  );
};

export default ContactForm;
