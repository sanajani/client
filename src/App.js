import './App.css'

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CreatePost from './pages/CreatePost';
import About from './components/About';

const App = () => {
  const [sideOpen, setSideOpen] = useState(false)
  // function for opening and closeing sidebar
  const sideBar = () => {
    setSideOpen(!sideOpen)
  }

  return (
    <div className='app'>
      <Navbar sideBar={sideBar} />
      {/* <Header/> */}
      {/* <Home/> */}
      <Sidebar sideOpen={sideOpen} sideBar={sideBar} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App