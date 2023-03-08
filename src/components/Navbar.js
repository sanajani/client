import {NavLink} from 'react-router-dom'

const Navbar = ({sideBar}) => {
    const user = {
        name:"Sana",
        isAdmin:true
    }
    return (
        <nav className='nav'>
            <div className="nav_container container">
                <div className="left">
                    <h1 className='logo'>Programming World</h1>
                </div>
                <div className="right">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    {user.isAdmin &&<NavLink to="/createpost">CreatePost</NavLink>}
                <div className="toggle" onClick={() => sideBar()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar