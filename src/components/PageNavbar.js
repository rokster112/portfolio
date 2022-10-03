/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Experience from './Experience'

const PageNavbar = () => {

  function burgerToggle() {
    if (window.innerWidth < 626) {
      const burger = document.querySelector('.Navbar-link-wrap');
      if (burger.style.display === 'block') {
        burger.style.display = 'none';
      } else {
        burger.style.display = 'block';
      }
    }
  }

  function burgerHide() {
    if (window.innerWidth < 626) {
      const burger = document.querySelector('.Navbar-link-wrap');
      if (burger.style.display === 'block') {
        burger.style.display = 'none';
      }
    }
  }

  return (
    <div className='Navbar'>
        <a href='#' className='Navbar-rokas' onClick={burgerHide}>ROKAS ARLAUSKAS</a>
      <div className='Navbar-link-wrap'>
        <a href='#About' className='Navbar-links' onClick={burgerHide}>About</a>
        <a href='#Skills-page' className='Navbar-links' onClick={burgerHide}>Skills</a>
        <a href='#Experience' className='Navbar-links' onClick={burgerHide}>Experience</a>
        <a href='#Main-container' className='Navbar-links' onClick={burgerHide}>Projects</a>
        <a href='#Footer' className='Navbar-links' onClick={burgerHide}>Contact Details</a>
      </div>
      <a href='javascript:void(0);' className='Navbar-burger' onClick={burgerToggle}>
        <i className='fa fa-bars'></i>
      </a>
    </div>
  )
}

export default PageNavbar