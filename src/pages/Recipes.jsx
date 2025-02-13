import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import dummyRecipes from '../pages/DummyRecipes';

function Recipes() {

  const [filter, setFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [dietFilter, setDietFilter] = useState('');

  const filteredRecipes = dummyRecipes.filter((recipe) => {
    const searchLower = filter.toLowerCase();
    const matchesText =
      recipe.title.toLowerCase().includes(searchLower) ||
      recipe.diet.toLowerCase().includes(searchLower);
    const matchesDifficulty =
      !difficultyFilter ||
      recipe.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
    const matchesDiet =
      !dietFilter ||
      recipe.diet.toLowerCase() === dietFilter.toLowerCase();
    return matchesText && matchesDifficulty && matchesDiet;
  });

  return (
    <div style={styles.container}>
      <h2>DishDelights Recipes</h2>
      <div style={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={styles.searchBox}
        />
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          style={styles.dropdown}
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          value={dietFilter}
          onChange={(e) => setDietFilter(e.target.value)}
          style={styles.dropdown}
        >
          <option value="">All Dietary Preferences</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Pescatarian">Pescatarian</option>
          <option value="Meat Included">Meat Included</option>
        </select>
      </div>
      <div style={styles.recipeList}>
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  filterContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  searchBox: {
    padding: '8px',
    width: '100%',
    maxWidth: '300px',
  },
  dropdown: {
    padding: '8px',
  },
  recipeList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
};

export default Recipes;
