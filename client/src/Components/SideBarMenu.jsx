import React, { useContext } from 'react'
import logo from '../Images/SlaywithUs-logo.png'
import '../Components/Component_CSS/CSS.css'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { useAuth } from './Context/auth'
import { themeContext } from './Context/DarkMode'


const SideBarMenu = ({ setOpenSideBar }) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [auth, setAuth] = useAuth();

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
            <div className="h-[100vh] w-[100vw] md:w-96 bg-black">
                <div className="sidebar flex justify-center items-center w-full h-1/3 relative">
                    <div onClick={() => { setOpenSideBar(false) }} className={`absolute top-2 right-3 p-1 cursor-pointer ${!darkMode ? "bg-white" : "bg-white"} ${!darkMode ? "text-black" : "text-black"} rounded-full text-4xl`}>
                        <AiOutlineClose />
                    </div>
                    <img className='w-20' src={logo} alt="" />
                </div>
                <div className="text-white">
                    <ul className='p-8'>
                        {/* <li className='pb-3 text-lg tracking-wide'><Link to={'/profile'}>Profile</Link></li> */}
                        <li className='pb-3 text-lg tracking-wide'><Link to={'/'}>Home</Link></li>
                        <li className='pb-3 text-lg tracking-wide'><Link to={'/blog'}>Blog</Link></li>
                        {
                            !auth.user ? (<>
                                <li className="nav-item pb-4">
                                    <NavLink to={'/register'}>Register</NavLink>
                                </li>
                                <li className="nav-item pb-4">
                                    <NavLink to={'/login'}>Login</NavLink>
                                </li>
                            </>) : null
                        }
                        <li><NavLink to={'/booking'}>Book Now</NavLink></li>
                        {
                            auth.user ? (<>
                                <li className="nav-item py-4">
                                    <NavLink onClick={handleLogout} to={'/login'}>Log out</NavLink>
                                </li>
                            </>) : null
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBarMenu
