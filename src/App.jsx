import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Header from './component/Header'
const App = () => {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}>   </Route>
      <Route path='/about' element={<About />}>   </Route>
      <Route path='/profile' element={<Profile />}>   </Route>
      <Route path='/signin' element={<Signin />}>   </Route>
      <Route path='/signout' element={<Signout />}>   </Route>

    </Routes>


  </BrowserRouter>


}

export default App
