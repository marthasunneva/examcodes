import React from 'react'

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} DishDelights — 456 Culinary Avenue, Gourmet Town, 1010 Vienna, Austria
      </p>
    </footer>
  )
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '10px 0',
    backgroundColor: '#333333', // Dark color
    color: '#fff',
  },
}

export default Footer
