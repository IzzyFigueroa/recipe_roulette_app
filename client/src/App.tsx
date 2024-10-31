// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Recipes from "./components/Recipes"
import Landing from "./pages/Landing"
import About from './pages/About';
import ContactForm from './pages/ContactForm';
import AuthForm from "./pages/AuthForm"
import NotFound from './pages/NotFound';
import RecipeBook from './pages/RecipeBook';

function App() {


  return (
    <>
      <Header />

      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/register" element={<AuthForm isLogin={false} />} />
          <Route path="/login" element={<AuthForm isLogin={true} />} />
          <Route path="/recipebook" element={<RecipeBook />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
