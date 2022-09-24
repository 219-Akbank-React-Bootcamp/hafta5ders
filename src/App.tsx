import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import TodoApp from './pages/TodoApp'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [token, setToken] = useState<string>('')

  const handleLogin = (token: string) => {
    setToken(token)
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setToken('')
    setIsLoggedIn(false)
  }
  return (
    <div className="App">
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage onSuccess={handleLogin} />} />
            <Route
              path="/login"
              element={<LoginPage onSuccess={handleLogin} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoApp onLogout={handleLogout} />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
