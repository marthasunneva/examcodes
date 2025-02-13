import React, { useState, useEffect } from 'react'
import RecipeForm from '../components/RecipeForm'

function Favorites() {
  const [favorites, setFavorites] = useState([])

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('favoriteRecipes')
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites))
  }, [favorites])

  const addRecipe = (recipe) => {
    setFavorites([...favorites, recipe])
  }

  const deleteRecipe = (id) => {
    setFavorites(favorites.filter(recipe => recipe.id !== id))
  }

  return (
    <div style={styles.container}>
      <h2>My Personal Favorite Recipes</h2>
      <RecipeForm onSubmit={addRecipe} />
      <div>
        {favorites.map(recipe => (
          <div key={recipe.id} style={styles.favoriteItem}>
            <h3>{recipe.title}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button onClick={() => deleteRecipe(recipe.id)} style={styles.deleteButton}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '20px',
  },
  favoriteItem: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  deleteButton: {
    backgroundColor: '#1565C0', // Deep Blue
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
  },
}

export default Favorites
