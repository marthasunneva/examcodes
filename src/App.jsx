import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Favorites from './pages/Favorites'
import About from './pages/About'
import Contact from './pages/Contact'
import RecipeDetail from './pages/RecipeDetail';

function App() {
  return (
    <Router>
      <Header />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

const styles = {
  main: {
    minHeight: '80vh',
    padding: '20px',
    backgroundColor: '#FFFFFF',
  },
}

export default App
