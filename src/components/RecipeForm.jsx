import React, { useState } from 'react'

function RecipeForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '')
  const [ingredients, setIngredients] = useState(
    initialData.ingredients ? initialData.ingredients.join(', ') : ''
  )
  const [instructions, setInstructions] = useState(initialData.instructions || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newRecipe = {
      id: initialData.id || Date.now(),
      title,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
    }
    onSubmit(newRecipe)
    // Clear form if it's a new recipe
    if (!initialData.id) {
      setTitle('')
      setIngredients('')
      setInstructions('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />
      <textarea
        placeholder="Ingredients (separated by commas)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
        style={styles.textarea}
      />
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
        style={styles.textarea}
      />
      <button type="submit" style={styles.button}>Save Recipe</button>
    </form>
  )
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
  },
  textarea: {
    padding: '8px',
    fontSize: '16px',
    height: '80px',
  },
  button: {
    backgroundColor: '#8BC34A', // Fresh Green
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}

export default RecipeForm
