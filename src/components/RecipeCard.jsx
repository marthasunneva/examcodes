import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {
  return (
    <div style={styles.card}>
      <img src={recipe.image} alt={recipe.title} style={styles.image} />
      <h3>{recipe.title}</h3>
      <p>{recipe.prepTime} prep | {recipe.cookTime} cook</p>
      {/* Link to /recipes/:id */}
      <Link to={`/recipes/${recipe.id}`} style={styles.link}>
        View Details
      </Link>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    width: '250px',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: '150px', //set a fixed height
    objectFit: 'cover',
    borderRadius: '8px',
  },
  recipeList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'flex-start', // Align all items at the top
  },  
  link: {
    marginTop: '10px',
    display: 'inline-block',
    color: '#3A5B26',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}

export default RecipeCard
