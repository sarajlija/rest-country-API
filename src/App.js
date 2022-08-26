import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/main.css"
//Components
import Header from "./components/Header"
import Countries from "./components/Countries"
import Country from "./components/Country"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

if (module.hot) {
  module.hot.accept()
}
