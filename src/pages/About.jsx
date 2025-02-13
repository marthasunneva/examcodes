import React from 'react'

function About() {
  return (
    <div style={styles.container}>
      <h2>About DishDelights</h2>
      <p>
        DishDelights is dedicated to providing simple, affordable, and delicious recipes.
        Our goal is to inspire students and anyone with limited resources to cook creative meals
        without breaking the bank.
      </p>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
  },
}

export default About
