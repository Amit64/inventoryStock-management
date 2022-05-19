import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const navigate = useNavigate();
    
    return (
        <section className='content-container'>
            <div className='container mx-auto  px-5 py-24 flex flex-col justify-center items-center h-screen'>
                <div className=' bg-fuchsia-400 '>
                <button onClick={()=>navigate("/additem")} className=' bg-purple-400 p-2 rounded border-2 border-black' >Add New Item</button>                
                </div>
            </div>
           
        </section>
    );
};

export default ManageInventory;