import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({isOpen,setIsOpen}) => {
    return (
        <div>
            <ul className={`${isOpen?' flex-col flex items-center fixed inset-0 left-1/4 top-20 gap-8 justify-center bg-black/10 backdrop-blur-lg uppercase md:hidden':'hidden'}`}>
               <li><NavLink to={"/"}>Home</NavLink></li>
               <li><NavLink to={"/inventory"}>Inventory</NavLink></li>
               <li><NavLink to={"/about"}>About</NavLink></li>
               <li><NavLink to={"/login"}>Login</NavLink></li>
               <li><NavLink to={"/"}>Home</NavLink></li>
           </ul>
        </div>
    );
};

export default MobileMenu;