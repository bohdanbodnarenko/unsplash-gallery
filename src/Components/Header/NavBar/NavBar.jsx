import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class NavBar extends Component {
    state = {
        categories:[
            'Wallpapers',
            'Textures',
            'Nature',
            'Architecture',
            'Business',
            'Travel',
            'Fashion',
            'Food',
            'People',
            'Health',
            'Arts',
        ]
    }
  render() {
      const links = this.state.categories.map(link=>(
          <NavLink key={link} to={`/search/${link}`}>{link}</NavLink>
      ))
    return (
        <nav>
            <NavLink exact to="/">HOME</NavLink>
            {links}
        </nav>
    )
  }
}

export default NavBar
