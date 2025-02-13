import React, { useState, useEffect } from 'react';
import RecipeForm from '../components/RecipeForm';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);

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

  const addOrUpdateFavorite = (recipe) => {
    if (editingRecipe) {
      // Update existing recipe: map over favorites and replace the matching one
      const updatedFavorites = favorites.map((fav) =>
        fav.id === editingRecipe.id ? { ...fav, ...recipe } : fav
      );
      setFavorites(updatedFavorites);
      setEditingRecipe(null);
    } else {
      // Add new recipe
      setFavorites([...favorites, recipe]);
    }
  };

  const deleteFavorite = (id) => {
    setFavorites(favorites.filter((recipe) => recipe.id !== id));
  };

  const editFavorite = (recipe) => {
    setEditingRecipe(recipe);
  };

  const cancelEdit = () => {
    setEditingRecipe(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Personal Favorite Recipes</h2>
      <div style={styles.formContainer}>
        <h3 style={styles.formHeading}>
          {editingRecipe ? 'Edit Favorite Recipe' : 'Add New Favorite Recipe'}
        </h3>
        <RecipeForm onSubmit={addOrUpdateFavorite} initialData={editingRecipe || {}} />
        {editingRecipe && (
          <button style={styles.cancelButton} onClick={cancelEdit}>
            Cancel Edit
          </button>
        )}
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
              <div style={styles.buttonContainer}>
                <button style={styles.editButton} onClick={() => editFavorite(recipe)}>
                  Edit
                </button>
                <button style={styles.deleteButton} onClick={() => deleteFavorite(recipe.id)}>
                  Delete
                </button>
              </div>
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
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#4CAF50', 
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: '30px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  formHeading: {
    marginBottom: '15px',
    textAlign: 'center',
    color: '#333',
  },
  cancelButton: {
    backgroundColor: '#999',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
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
  buttonContainer: {
    marginTop: '10px',
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Favorites;
