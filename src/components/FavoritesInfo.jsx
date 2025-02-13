import React from 'react';

function FavoritesInfo() {
  return (
    <>
      <h2 style={styles.heading}>Welcome to Your Personal Favorites!</h2>
      <p style={styles.paragraph}>
        This page is your very own recipe collection—your personal cookbook! Here you can save,
        edit, and manage recipes that you love or want to try later.
      </p>
      <p style={styles.paragraph}>
        Whether you’re discovering a new quick dinner idea or preserving a treasured family recipe,
        everything you add is stored right here in your browser, so it’s always at your fingertips.
      </p>
      <p style={styles.paragraph}>
        Enjoy customizing your culinary journey and building a collection that's uniquely yours!
      </p>
    </>
  );
}

const styles = {
  heading: {
    fontFamily: '"TheSeasons", serif',
    color: '#4CAF50',
    fontSize: '2rem',
    marginBottom: '15px',
    textAlign: 'center',
  },
  paragraph: {
    fontFamily: 'Arial, sans-serif',
    color: '#555',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '1em',
    textAlign: 'center',
  },
};

export default FavoritesInfo;
