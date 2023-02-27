import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import {HiSearch} from 'react-icons/hi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import './NavBar.css'
const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)
  return (
    <div className='navbar'>
      <div className='navbar__img-container'>
        <img src={logo} alt='logo' />
      </div>
      <ul className='navbar__list'>
        <li className='navbar__list-item'><a href="#">blog</a></li>
        <li className='navbar__list-item'><a href="#">contact</a></li>
        <li className='navbar__list-item'><a href="#">about</a></li>
          {!toggleSearch ? <HiSearch onClick={()=>setToggleSearch(true)} style={{cursor:"pointer"}} /> : <AiOutlineClose onClick={()=>setToggleSearch(false)} style={{cursor:"pointer"}} />}
          {toggleSearch && <div className='input__box'>
            <input type="search" placeholder='Search here...' />
          </div>}
      </ul>
      <div className='mobile__menu'>
        <GiHamburgerMenu onClick={()=>setToggle(!toggle)} style={{cursor:"pointer"}} />
      </div>
      {
        toggle && <ul className='mobile__navbar__list'>
        <div className='close'>
          <AiOutlineClose onClick={()=>setToggle(!toggle)} style={{cursor:"pointer"}} />
        </div>
        <li className='mobile__navbar__list-item'onClick={()=>setToggle(false)} ><a href="#">blog</a></li>
        <li className='mobile__navbar__list-item'onClick={()=>setToggle(false)}><a href="#">contact</a></li>
        <li className='mobile__navbar__list-item'onClick={()=>setToggle(false)}><a href="#">about</a></li>
        <HiSearch />
      </ul>
      }
    </div>
  )
}

export default NavBar