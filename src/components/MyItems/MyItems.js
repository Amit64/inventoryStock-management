import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Items from './Items';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems,setMyItems] = useState([]);
    const navigate = useNavigate();

   console.log(myItems);
   const deleteStock = id =>{
    let isExecuted = window.confirm("Are you sure to execute this action?");
     if(isExecuted){
       const url =`https://mcare-inventory.herokuapp.com/delete-stock/${id}`;
     fetch(url, {
       method: 'DELETE',
     })
     }
     
    }

    useEffect(()=>{
        
        const getItems = async ()=>{
            const email = user?.email ;
            const url = `https://mcare-inventory.herokuapp.com/filter-products?email=${email}`;
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
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">{myItems?.length}-Item added by - {user?.displayName}</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome {user?.displayName}, to your dashboard .You can update or delete your stock here.</p>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Image</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Name</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">supplier</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quantity</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Update</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Delete</th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          {
              myItems.map(myItem => <Items
                key={myItem._id}
                myItem = {myItem}
                deleteStock={deleteStock}
              ></Items>)
          }
        </tbody>
      </table>
    </div>
  
  </div>
</section>
    );
};

export default MyItems;