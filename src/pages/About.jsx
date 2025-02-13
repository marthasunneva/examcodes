// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Example placeholder image (you can replace with your own asset)
import behindScenesImg from '../assets/recipes/about1.jpg';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About DishDelights</h1>
      
      {/* Visual Element / Illustration */}
      <div style={styles.imageContainer}>
        <img
          src={behindScenesImg}
          alt="Behind the Scenes of DishDelights"
          style={styles.image}
        />
      </div>
      
      <p style={styles.paragraph}>
        DishDelights is dedicated to providing simple, affordable, and delicious recipes. Our goal 
        is to inspire people who want to elevate their home cooking to try new and fun recipes. Whether you’re exploring new flavors or perfecting a beloved classic, 
        we’re here to make your cooking journey enjoyable and accessible.
      </p>

      {/* User/Community Story or Testimonial */}
      <blockquote style={styles.testimonial}>
        “DishDelights helped me cook delicious meals on a tight budget! I’ve saved so much money 
        while discovering new, fun recipes every week.”
      </blockquote>
      <p style={styles.testimonialAuthor}>— Alex, Happy Student Cook</p>

      <blockquote style={styles.testimonial}>
      “DishDelights makes it so easy to find new meal ideas! My roommates and I have saved a ton on groceries while still eating delicious, homemade food.”
      </blockquote>
      <p style={styles.testimonialAuthor}>— Jamie, College Student</p>

      <blockquote style={styles.testimonial}>
      “I love that every recipe has simple instructions and uses budget-friendly ingredients. DishDelights really helped me gain confidence in the kitchen!”      </blockquote>
      <p style={styles.testimonialAuthor}>— Mia, Busy Professional</p>

        {/* Icons / Dividers / Section Break */}
      <hr style={styles.divider} />

      <p style={styles.paragraph}>
        <strong>Explore Our Recipes:</strong> Dive into a growing collection of dishes that suit 
        every taste and dietary preference. From budget-friendly pasta ideas to quick stir-fries, 
        we’ve got you covered!
      </p>
      <p style={styles.paragraph}>
        <strong>Join Our Community:</strong> Whether you’re a student in a tiny dorm kitchen or 
        simply cooking on a tight budget, DishDelights is all about sharing knowledge and 
        supporting each other’s culinary adventures. 
      </p>

      {/* Call-to-Action (CTA) */}
      <Link to="/recipes" style={styles.ctaButton}>
        Explore Our Recipes
      </Link>
      <Link to="/contact" style={{ ...styles.ctaButton, ...styles.secondaryButton }}>
        Get In Touch
      </Link>
    </div>
  );
}

export default About;

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  title: {
    fontFamily: '"TheSeasons", serif', // Or match your brand font
    fontSize: '2.5rem',
    color: '#4CAF50',
    marginBottom: '20px',
    textAlign: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
    marginBottom: '1.5rem',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #ddd',
    margin: '20px 0',
  },
  testimonial: {
    fontStyle: 'italic',
    backgroundColor: '#f9f9f9',
    borderLeft: '4px solid #4CAF50',
    padding: '15px',
    margin: '20px 0',
    color: '#444',
  },
  testimonialAuthor: {
    textAlign: 'right',
    color: '#666',
    marginBottom: '30px',
    marginTop: '-10px',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  secondaryButton: {
    backgroundColor: '#1565C0',
  },
};