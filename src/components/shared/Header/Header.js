import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import MobileMenu from "../MobileMenu/MobileMenu";
import MCARE from "../../../Assets/Images/MCARE.png";
import { signOut } from "firebase/auth";

import './Header.css'
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
    const[isOpen,setIsOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    
  return (
   <div className="fixed w-full flex justify-between p-2 items-center bg-[#282727] shadow-lg z-40">
       <div className="">
           <Link to="/"><img className=" object-cover w-56 h-16" src={MCARE} alt="m.care" /></Link>
        
       </div>
       <nav >
           <div>
               <span className="md:hidden cursor-pointer absolute right-2 scale-150" onClick={()=>setIsOpen(!isOpen)}>
               {isOpen ? <AiOutlineClose className="text-[#C84B31]"/>:<FaBars className=" text-[#C84B31]" />}
               </span>
           </div>
           <ul className={` hidden md:flex gap-4 uppercase p-2 bg-slate-200 rounded`}>
               <li><NavLink to={"/home"}>Home</NavLink></li>
               <li><NavLink to={"/blog"}>Blog</NavLink></li>
               <li><NavLink to={"/about"}>About</NavLink></li>
               <li><NavLink to={"/inventory"}>Manage Inventory</NavLink></li>
               
               {
                   !user? (<><li><NavLink to={"/login"}>LogIn</NavLink></li></>):
                   (<>
                   <li><NavLink to={"/additem"}>Add Item</NavLink></li>
                   <li><NavLink to={"/myitem"}>My Item</NavLink></li>
                   <li><button onClick={()=>signOut(auth)}>LogOut</button></li></>)
               }
              
           </ul>
           <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
       </nav>
   </div>
  );
};

export default Header;
