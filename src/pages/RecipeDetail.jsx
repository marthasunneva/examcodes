import React from 'react';
import { useParams } from 'react-router-dom';
import dummyRecipes from '../pages/DummyRecipes';

function RecipeDetail() {
  const { id } = useParams(); // read the :id from the route
  const recipe = dummyRecipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <div style={{ padding: '20px' }}>Recipe not found.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} style={styles.image} />
      <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
      <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>
      <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <p><strong>Diet:</strong> {recipe.diet}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
  },
};

export default RecipeDetail;
