
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {sidebar} from '../features/sideBarSlicer';



const Sidebar = () => {

      const isSide = useSelector((state) => state.isSide.sidebarValue);
      const dispatch = useDispatch();

  return (
    <div className={isSide?'side active':'side'}>
        <div className="toggle" onClick={() => dispatch(sidebar())}>
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