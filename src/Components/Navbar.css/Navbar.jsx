import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
  window.addEventListener('scroll',()=>{
    
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li><Link to="hero" smooth={true} duration={500}> Home </Link></li>
        <li><Link to="program" smooth={true} duration={500} offset={-300} >Program</Link></li>
        <li><Link to="about" smooth={true} duration={500} offset={-150}>About us</Link></li>
        <li><Link to="campus" smooth={true} duration={500} offset={-300}> Campus</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500} offset={-300}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} duration={500} offset={-300} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
