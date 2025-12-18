
import './App.css'
import React, { useState } from "react"

function App() {

  // ✅ Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // ✅ Handle Login
  const handleLogin = (e) => {
    e.preventDefault()

    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter both Name and Email")
      return
    }

    alert("Login Successful! Welcome " + name)
    setIsLoggedIn(true)
  }

  // ✅ If NOT logged in → Show Login Page With LEFT IMAGE
  if (!isLoggedIn) {
  return (
    <div className="login-page">

      {/* ✅ LEFT IMAGE AREA */}
      <div className="login-image"></div>

      {/* ✅ RIGHT LOGIN FORM */}
      <div className="login-container">

        <h2>⚽ Football World Login</h2>

        <form onSubmit={handleLogin} className="login-box">
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
        </div>
    </div>
    )
  }


  // ✅ After Login → Show Home Page
  return (
    <div>

      {/* Header */}
      <header className="header">
        <h1>⚽ Football World</h1>

        <nav>
          <a href="#" className="active">Home</a>
          <a href="#">About Us</a>
          <a href="#">Players</a>
          <a href="#">Top Stats</a>
          <a href="#">Player Ratings</a>
          <a href="#">Win rates</a>
          <a href="#">Player Details & Comparison</a>
          <a href="#">Stadium Details</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to Football World, {name} ⚽</h2>
        <p>Your one-stop destination for football stats, teams, and player profiles!</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Football World | All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default App
