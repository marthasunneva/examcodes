// src/components/RecipeForm.jsx
import React, { useState } from 'react';

function RecipeForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [ingredients, setIngredients] = useState(
    initialData.ingredients ? initialData.ingredients.join(', ') : ''
  );
  const [instructions, setInstructions] = useState(initialData.instructions || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: initialData.id || Date.now(),
      title,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
    };
    onSubmit(newRecipe);
    if (!initialData.id) { // Clear form only if adding new recipe
      setTitle('');
      setIngredients('');
      setInstructions('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles.form}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={formStyles.input}
      />
      <textarea
        placeholder="Ingredients (separated by commas)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
        style={formStyles.textarea}
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
        style={formStyles.textarea}
      />
      <button type="submit" style={formStyles.button}>
        {initialData.id ? 'Update Recipe' : 'Save Recipe'}
      </button>
    </form>
  );
}

const formStyles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '60px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    padding: '12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
};

export default RecipeForm;
