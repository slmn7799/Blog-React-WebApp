import React from 'react'
import TopBar from './components/topbar/TopBar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
      <Route path="/to" element={<TopBar />} />
      </Routes>
    </Router>
  )
}

export default App
