import React from "react"
import "../styles/Header.css"
import { FaMoon } from "react-icons/fa"
function Header() {
  const changeTheme = () => {
    const btn = document.querySelector(".btn-toggle")
    document.body.classList.toggle("light-theme")
  }
  return (
    <div className="header">
      <h1>Where in the world?</h1>
      <div className="btn-toggle" onClick={() => changeTheme()}>
        <FaMoon />
        <span>dark mode</span>
      </div>
    </div>
  )
}

export default Header
