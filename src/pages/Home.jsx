// src/pages/Home.jsx
import React from 'react';
import backgroundImg from '../assets/recipes/background.jpg';
import CTAButton from '../components/CTAButton';
import './Home.css';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to DishDelights!</h1>

      <div style={styles.textBlock}>
        <p style={styles.paragraph}>
          Your go-to source for simple, budget-friendly and delicious meals!
        </p>
        <p style={styles.paragraph}>
          <strong>DishDelights</strong> is a vibrant community dedicated to uniting food lovers from around the globe. 
          With a vast collection of recipes, we offer a diverse range of dishes to suit every taste and dietary preference.
        </p>
        <p style={styles.paragraph}>
          Whether you're a student on a tight budget or simply looking for new ideas, 
          DishDelights makes it easy to discover and create mouth-watering meals at home.
        </p>
        <CTAButton label="Explore Recipes" to="/recipes" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    /* The gradient overlay ensures text is more readable */
    background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
    maxWidth: '600px',
    lineHeight: '1.4',
  },
};

export default Home;

