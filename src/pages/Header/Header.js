import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import HeaderLogo from '../../images/medizoid_Logo.webp';
import './Header.css';


// Menu Active Style____________
const navbarMenuActiveStyle = {
    color: '#e83a3b',
}



const Header = () => {
    const {user, logOut} = useAuth()


    // Responsive Navbar Menu Condition_____________
    const [menuRes, setMenuRes] = useState(false);
    const onClickResponsiveMenu = () => {
        setMenuRes(true)
    }
    
    return (
        <div className="bg-blue-600 z-10 py-3 fixed w-full left-0 top-0">
            <div className="container mx-auto px-3 h-8 flex items-center justify-between">
                <div className="h-8">
                    <Link to="/">
                        <h1 className='italic text-3xl font-bold text-white'>Safe Journey</h1>
                    </Link>
                </div>
                <div id={menuRes ? "responsive-menus" : "responsive-menus-no-toggle"}>
                    <ul className="flex items-center" >
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/home">Home</NavLink>
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/doctors">Owner</NavLink>
                        <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize  lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/hospital">About Us</NavLink>
                        {/* ------------Show Login and Log Out Button or Link by condition------------ */}
                        {
                            user.email ?
                                (
                                    <button onClick={logOut} className="menu-link text-gray-700 text-lg font-bold capitalize lg:ml-8">Logout</button>
                                )
                                   :
                                (
                                    <NavLink className="menu-link text-gray-700 text-lg font-bold capitalize lg:ml-8" activeStyle={navbarMenuActiveStyle} to="/login">Login</NavLink>
                                )
                                }
                        {/* --------Show user Image-------- */}
                                {
                                    user.photoURL !== undefined?
                                        <div className="w-10 h-10 mx-3 rounded-full overflow-hidden">
                                            <img className="w-full" src={user.photoURL} alt={user.displayName} />
                                        </div>
                                             :
                                         <div></div>
                                }
                            {/* ------Show User Names----- */}
                            <span className="text-lg font-medium text-gray-100 lg:text-gray-900 capitalize">
                                {
                                    user.displayName ?
                                        user.displayName
                                        :
                                        ''
                                }
                            </span>
                    </ul>
                </div>
                <span onClick={()=>setMenuRes(!menuRes)} className="menu-handle"><i className={menuRes ? "fas fa-times" : "fas fa-bars"}></i></span>
            </div>
        </div>
    );
};

export default Header;