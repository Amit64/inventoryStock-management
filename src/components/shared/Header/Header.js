import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {GrClose} from "react-icons/gr";
import MobileMenu from "../MobileMenu/MobileMenu";
import './Header.css'

const Header = () => {
    const[isOpen,setIsOpen] = useState(false);
    
  return (
   <div className="fixed w-full flex justify-between p-2 items-center menu">
       <div className="text-2xl font-bold text-center uppercase">
           <h2>M.<span className="block  bg-slate-300">Stock</span></h2>
       </div>
       <nav >
           <div>
               <span className="md:hidden cursor-pointer absolute right-2 scale-150" onClick={()=>setIsOpen(!isOpen)}>
               {isOpen ? <GrClose/>:<FaBars/>}
               </span>
           </div>
           <ul className={`hidden md:flex gap-4 uppercase p-2 bg-slate-200 rounded`}>
               <li><NavLink to={"/"}>Home</NavLink></li>
               <li><NavLink to={"/"}>Home</NavLink></li>
               <li><NavLink to={"/"}>Home</NavLink></li>
               <li><NavLink to={"/"}>Home</NavLink></li>
               <li><NavLink to={"/"}>Home</NavLink></li>
           </ul>
           <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
       </nav>
   </div>
  );
};

export default Header;
