import React, { useContext } from 'react'
import TopBar from './components/topbar/TopBar'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserContext } from './context/Context';


const App = () => {
  const { user} = useContext(UserContext);

  return (
    <Router>
      <TopBar></TopBar>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={!user? <Home /> : <Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/write' element={!user? <Write /> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
        <Route path='/settings' element={!user? <Settings /> : <Register />} />
      </Routes>
    </Router>
  )
}

export default App
