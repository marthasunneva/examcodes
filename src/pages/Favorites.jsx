// src/pages/Favorites.jsx
import React, { useState, useEffect } from 'react';
import RecipeForm from '../components/RecipeForm';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  const deleteFavorite = (id) => {
    setFavorites(favorites.filter((recipe) => recipe.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>My Personal Favorite Recipes</h2>
      {/* Form to add a new favorite recipe */}
      <RecipeForm onSubmit={addFavorite} />
      {/* Show a friendly message if there are no favorites */}
      {favorites.length === 0 ? (
        <p style={styles.message}>No favorites added yet. Start adding some recipes!</p>
      ) : (
        <div style={styles.list}>
          {favorites.map((recipe) => (
            <div key={recipe.id} style={styles.recipeItem}>
              <h3>{recipe.title}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
              <button style={styles.deleteButton} onClick={() => deleteFavorite(recipe.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  message: {
    fontStyle: 'italic',
    color: '#666',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
  },
  recipeItem: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Favorites;
