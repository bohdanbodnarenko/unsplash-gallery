import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'
import SearchBar from './SearchBar/SearchBar';
import NavBar from './NavBar/NavBar';

const Header = (props) => {
  return (
    <header>
        <div className="searchWrapper">
            <Link className='logo' to='/'>Unsplash Gallery Appp</Link>
            <SearchBar />
        </div>
        <NavBar />
    </header>
  )
}

export default Header
