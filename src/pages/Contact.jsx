// src/pages/Contact.jsx
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this console log with a real API call if needed.
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Get in Touch</h1>
      <p style={styles.subtitle}>
        We’d love to hear from you! 
      </p>
      <p style={styles.subtitle}>
      Whether you have questions, suggestions, or just want to share your cooking experiences,
      please drop us a message below.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      ) : (
        <div style={styles.thankYouMessage}>
          <h2>Thank You!</h2>
          <p>
            Your message has been sent. Thanks for reaching out — your message is the secret spice in our day! We’ll whip up a delicious reply just for you soon.
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '40px 20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  title: {
    fontFamily: '"TheSeasons", serif',
    fontSize: '2.5rem',
    color: '#4CAF50',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  thankYouMessage: {
    backgroundColor: '#e8f5e9',
    padding: '20px',
    borderRadius: '8px',
    color: '#2e7d32',
  },
};

export default Contact;

