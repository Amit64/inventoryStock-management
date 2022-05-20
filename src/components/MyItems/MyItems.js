import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems,setMyItems] = useState([]);
    const navigate = useNavigate();

   

    useEffect(()=>{
        
        const getItems = async ()=>{
            const email = user?.email ;
            const url = `http://localhost:3006/filter-products?email=${email}`;
            try{
                const {data} = await axios.get(url,{
                    headers:{
                        authorization : `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyItems(data);
            }catch(error){
                console.log(error.message);
                if(error.response.status === 403 || error.response.status === 401){
                    signOut(auth);
                    navigate("/login");
                }
            }
            
        }
       getItems();
    },[user])
    return (
        <div className='container px-5 py-24 mx-auto'>
            <h2>My items : {myItems.length}</h2>
        </div> 
    );
};

export default MyItems;