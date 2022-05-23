import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const MobileMenu = ({isOpen,setIsOpen}) => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <ul className={`${isOpen?' flex-col flex items-center fixed inset-0 left-1/4 top-20 gap-8 justify-center bg-black/10 backdrop-blur-lg uppercase md:hidden':'hidden'}`}>
               
               <li><NavLink to={"/"}>Home</NavLink></li>
               <li><NavLink to={"/about"}>Blog</NavLink></li>
               <li><NavLink to={"/about"}>About</NavLink></li>
               <li><NavLink to={"/inventory"}>Manage Inventory</NavLink></li>
               
               
               {
                   !user?(<><li><NavLink to={"/login"}>Login</NavLink></li></>):
                   (<><li><NavLink to={"/manageitem"}>Manage Items</NavLink></li>
                   <li><NavLink to={"/additem"}>Add Item</NavLink></li>
                   <li><NavLink to={"/myitem"}>My Item</NavLink></li>
                   <button onClick={()=>signOut(auth)}>LogOut</button></>)
               }
           </ul>
        </div>
    );
};

export default MobileMenu;