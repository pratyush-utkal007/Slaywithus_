import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenuAltLeft, BiSearch } from 'react-icons/bi'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'
import leftImg from '../../Images/nl.webp'
import logo from '../../Images/SlaywithUs-logo.png'
import SideBarMenu from '../SideBarMenu'
import { useAuth } from '../Context/auth'
import { toast } from 'react-toastify'
import { themeContext } from '../Context/DarkMode'

const Header = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  const [auth, setAuth] = useAuth();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    theme.dispatch({ type: 'toggle' })
  }

  // Logout function
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    });
    localStorage.removeItem('loginToken')
    toast.success('Logout Successfully')
  };
  return (
    <>

      <div className={`sidebar-menu fixed z-40 ${!openSideBar ? "-translate-x-full" : "translate-x-0"} duration-500`}>
        <SideBarMenu setOpenSideBar={setOpenSideBar} />
      </div>

      <div className="hidden lg:block bg-black">
        <div className="flex justify-between items-center mx-20 w-1/2 py-4">
          <div className="left-image flex items-center gap-2">
            <img className=' w-20' src={leftImg} alt={leftImg} />
            <div className="text-white cursor-pointer opacity-100 hover:opacity-70 duration-500">
              <p className='text-sm tracking-wider'>Get Our Newsletter</p>
              <p className='text-lg tracking-widest'>SUBSCRIBE</p>
            </div>
          </div>
          <div className="right-image me-12">
            <img className='w-36' src={logo} alt={logo} />
          </div>
        </div>
      </div>

      <div className="header-wrapper sticky top-0 z-30 flex justify-between items-center bg-black text-white px-3 mb-2 py-1 lg:px-20 lg:py-3">
        <div onClick={() => { setOpenSideBar(true) }} className="menu-icon text-4xl">
          <BiMenuAltLeft />
        </div>
        <div className="header-link hidden lg:block">
          <ul className='flex gap-10 cursor-pointer'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/blog'}>Blog</NavLink></li>
            {
              !auth.user ? (<>
                <li className="nav-item">
                  <NavLink to={'/register'}>Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/login'}>Login</NavLink>
                </li>
              </>) : null
            }
            <li><NavLink to={'/booking'}>Book Now</NavLink></li>
            {
              auth.user ? (<>
                <li className="nav-item">
                  <NavLink onClick={handleLogout} to={'/login'}>Log out</NavLink>
                </li>
              </>) : null
            }
          </ul>
        </div>
        <div onClick={() => { setOpenSideBar(false) }} className="left-icons text-2xl flex gap-3 lg:gap-6 cursor-pointer">
          <AiOutlineThunderbolt className='hidden lg:block text-3xl' />
          <div className="toggle" onClick={handleClick}>
            {
              !darkMode ? <BsFillMoonFill /> : <BsSun />
            }
          </div>
          <BiSearch className='text-3xl' />
        </div>
      </div>
    </>
  )
}

export default Header
