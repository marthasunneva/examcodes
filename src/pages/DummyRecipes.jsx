import pastaImg from '../assets/recipes/pasta.jpg';
import stirfryImg from '../assets/recipes/stirfry.jpg';
import saladImg from '../assets/recipes/salad.jpg';
import quesadillaImg from '../assets/recipes/quesadilla.jpg';
import stewImg from '../assets/recipes/stew.jpg';
import wrapImg from '../assets/recipes/wrap.jpg';

const dummyRecipes = [
  {
    id: 1,
    title: 'Budget Pasta',
    ingredients: ['pasta', 'tomato sauce', 'garlic', 'basil'],
    instructions: 'Boil pasta. Prepare sauce. Mix and serve.',
    prepTime: '10 mins',
    cookTime: '15 mins',
    servings: 2,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    image: pastaImg,
  },
  {
    id: 2,
    title: 'Simple Stir Fry',
    ingredients: ['rice', 'mixed veggies', 'soy sauce'],
    instructions: 'Cook rice. Stir fry veggies. Mix with soy sauce. Serve hot.',
    prepTime: '15 mins',
    cookTime: '10 mins',
    servings: 2,
    difficulty: 'Easy',
    diet: 'Vegetarian',
    image: stirfryImg,
  },
  {
    id: 3,
    title: 'Quick Tuna Salad',
    ingredients: ['canned tuna', 'mayonnaise', 'onion', 'celery'],
    instructions: 'Drain the tuna. Chop onion and celery. Mix with mayonnaise. Season.',
    prepTime: '5 mins',
    cookTime: '0 mins',
    servings: 2,
    difficulty: 'Easy',
    diet: 'Pescatarian',
    image: saladImg,
  },
  {
    id: 4,
    title: 'Veggie Quesadilla',
    ingredients: ['tortilla', 'cheese', 'onion', 'bell pepper'],
    instructions: 'Sauté onion and bell pepper. Place cheese & veggies in tortilla. Heat.',
    prepTime: '10 mins',
    cookTime: '5 mins',
    servings: 2,
    difficulty: 'Medium',
    diet: 'Vegetarian',
    image: quesadillaImg,
  },
  {
    id: 5,
    title: 'Hearty Beef Stew',
    ingredients: ['beef', 'potatoes', 'carrots', 'onion', 'celery'],
    instructions: 'Brown beef, add veggies, simmer until tender.',
    prepTime: '20 mins',
    cookTime: '2 hrs',
    servings: 4,
    difficulty: 'Hard',
    diet: 'Meat Included',
    image: stewImg,
  },
  {
    id: 6,
    title: 'Quick Chicken Wrap',
    ingredients: ['tortilla', 'cooked chicken', 'lettuce', 'tomato', 'mayonnaise'],
    instructions: 'Warm tortilla. Add chicken, lettuce, tomato, mayo. Fold or roll.',
    prepTime: '10 mins',
    cookTime: '0 mins',
    servings: 2,
    difficulty: 'Easy',
    diet: 'Meat Included',
    image: wrapImg,
  },
];

export default dummyRecipes;
