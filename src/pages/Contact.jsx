import React from 'react'

function Contact() {
  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p>
        For inquiries or feedback, please email us at:
        <a href="mailto:info@dishdelights.com" style={styles.link}> info@dishdelights.com</a>
      </p>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
  },
  link: {
    color: '#3A5B26',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}

export default Contact
