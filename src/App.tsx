import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TodoApp from './pages/TodoApp'
import { useLoginContext } from './contexts/LoginContext/LoginContext'
function App() {

  const {isLoggedIn} = useLoginContext()
  
  return (
    <div className="App">
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoApp />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
