import './App.css'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CreatePost from './pages/CreatePost';
import About from './components/About';
import BlogSettup from './components/BlogSettup';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import ProtectedRoute from './components/ProtectedRoute';
import AdminNavbar from './adminComponents/AdminNavbar';
import Dashbord from './adminComponents/Dashbord';


// redux section
// reducer funtion
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { isAdminLogin } from './features/isLogin';

axios.defaults.withCredentials = true


const App = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.isAdmin.isAdminLoggedin);
  const isBlog = useSelector((state) => state.isBlog.isblog);



  useEffect(() => {
    const isUser = async () => {
      try {
        let adminUser = await axios.get("http://localhost:8000/user/admin", {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true
          }
        });
        // let data = adminUser.data
        if (adminUser) {
          dispatch(isAdminLogin())
          let adminData = adminUser.data.admin
          console.log(adminData);
        }
      } catch (error) {
        console.log(error);
      }
      // let data = await adminUser.data
    }
    isUser()
  }, [dispatch])
  // const isLogin = useSelector((state) => state.isAdmin.isAdminLoggedin)



  if (!isBlog) {
    return <ProtectedRoute Container={BlogSettup} />
  }

  return (
    <div className='app'>
      {
        isAdmin ?
          <AdminNavbar /> :
          <Navbar />
      }
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {
          isAdmin ?
            <>
              <Route path='/createpost' element={<CreatePost />} />
              <Route path='/dashbord' element={<Dashbord />} />
            </>
            : null
        }
          <Route path='/user/login/login/login' element={<Login />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App