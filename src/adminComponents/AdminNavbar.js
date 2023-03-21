import {NavLink} from 'react-router-dom'
import {useDispatch, useSelector } from 'react-redux'
import {sidebar} from '../features/sideBarSlicer';

const AdminNavbar = () => {
    const dispatch = useDispatch();
  

    return (
        <nav className='nav'>
            <div className="nav_container container">
                <div className="left">
                    <h1 className='logo'>Programming World</h1>
                </div>
                <div className="right isAdmin">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/dashbord">Dashbord</NavLink>
                    <NavLink to="/createpost">CreatePost</NavLink>
                <div className="toggle" onClick={() => dispatch(sidebar())}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavbar