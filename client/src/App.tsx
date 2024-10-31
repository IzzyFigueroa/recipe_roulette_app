// import { useState } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import AuthForm from "./pages/AuthForm"
import Recipes from "./components/Recipes"
import Hero from "./components/Hero"
// import Landing from "./pages/Landing"

function App() {


  return (
    <>
      <Header />


      <Routes>
        <>

        <Route path="/" element={<Hero />} />
        <Route path="/recipes" element={<Recipes />} />
          <Route path="/register" element={<AuthForm isLogin={false} />} />
          <Route path="/login" element={<AuthForm isLogin={true} />} />
        </>
      </Routes>
      

      <Footer />
    </>
  )
}

export default App
