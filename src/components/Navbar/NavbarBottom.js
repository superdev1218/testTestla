import React from 'react'
import style from './Navbottom.module.scss'

const NavbarBottom=()=> {
  return (
    <div className={style.nav_bottom}>
        <ul>
            <li>Tesla © 2022</li>
            <li>Privacy & Legal</li>
            <li>Vehicle Recalls</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>News</li>
            <li>Engage</li>
            <li>Locations</li>
        </ul>
    </div>
  )
}

export default NavbarBottom
