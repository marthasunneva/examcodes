import React, { useState, useEffect } from 'react';
import RecipeForm from '../components/RecipeForm';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
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
      <h2 style={styles.heading}>My Personal Favorite Recipes</h2>
      <div style={styles.formContainer}>
        <RecipeForm onSubmit={addFavorite} />
      </div>

      {favorites.length === 0 ? (
        <p style={styles.message}>No favorites added yet. Start adding some recipes!</p>
      ) : (
        <div style={styles.list}>
          {favorites.map((recipe) => (
            <div key={recipe.id} style={styles.recipeItem}>
              <h3 style={styles.recipeTitle}>{recipe.title}</h3>
              <p style={styles.recipeText}>
                <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
              </p>
              <p style={styles.recipeText}>
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
              <button
                style={styles.deleteButton}
                onClick={() => deleteFavorite(recipe.id)}
              >
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
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#4CAF50', // green accent color
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: '30px',
  },
  message: {
    fontStyle: 'italic',
    color: '#666',
    textAlign: 'center',
    marginTop: '30px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  recipeItem: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  recipeTitle: {
    marginBottom: '10px',
    fontSize: '1.3rem',
    color: '#333',
  },
  recipeText: {
    marginBottom: '5px',
    lineHeight: '1.5',
    color: '#555',
  },
  deleteButton: {
    backgroundColor: '#d9534f', // red for delete
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default Favorites;
