import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { routes } from '../routes'
import { useGlobalStates } from './utils/global.context'

const Navbar = () => {
  const {dispatch} = useGlobalStates();

  const handleChangeTheme = () => {
    dispatch();
  }

  return (
    <nav>
      <div className='nav-links'>
        <Outlet />
        <Link to={routes.home}>Home</Link>
        <Link to={routes.contact}>Contact</Link>
        <Link to={routes.favs}>Favorites</Link>
      </div>

      <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            onClick={handleChangeTheme}
          />
          <div className="slider round"></div>
        </label>
        <span>🌒</span>
      </div>

    </nav>
  )
}

export default Navbar