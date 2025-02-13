import React from 'react';

function FavoritesInfo() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Your Personal Favorites!</h2>
      <p style={styles.paragraph}>
        This page is your very own recipe collection—your personal cookbook!
        Here you can save, edit, and manage recipes that you love or want to try later.
        
        <p style={styles.paragraph}>
        Whether you’re discovering a new quick dinner idea or preserving a treasured family recipe,
        everything you add is stored right here in your browser, so it’s always at your fingertips.
        </p>
        <p style={styles.paragraph}>
        Enjoy customizing your culinary journey and building a collection that's uniquely yours!
        </p>
      </p>
    </div>
  );
}

const styles = {
  container: {
    margin: '20px auto',
    padding: '20px',
    maxWidth: '800px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontFamily: '"TheSeasons", serif', 
    color: '#4CAF50',
    fontSize: '2rem',
    marginBottom: '15px',
  },
  paragraph: {
    fontFamily: 'Arial, sans-serif',
    color: '#555',
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
};

export default FavoritesInfo;
