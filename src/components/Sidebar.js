
import {Link} from 'react-router-dom'

const Sidebar = ({sideOpen,sideBar}) => {
  return (
    <div className={sideOpen?'side active':'side'}>
        <div className="toggle" onClick={() => sideBar()}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="side_links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </div>
    </div>
  )
}

export default Sidebar