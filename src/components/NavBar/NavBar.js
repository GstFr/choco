import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import "./NavBar.css"
import Logo from '../../Logo.png'


const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid containerNavBar">
      
      <img src ={Logo} alt = 'logo' className='logo'/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/exoticas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Exóticas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/jardin`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Jardín</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/category/otros`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Otros</NavLink>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar