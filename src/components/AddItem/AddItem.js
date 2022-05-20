import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  // const [user1] = useSignInWithGoogle(auth);
  // console.log(user1);
    const { register, handleSubmit,reset } = useForm();
    
  const onSubmit = data => {
      const url = `http://localhost:3006/product`
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          if(response.ok){
            toast('Your Item Is Added !');
          }
          return response.json();
        }
        )
        .then((json) => console.log(json));
        reset();
  };
    return (
        <section className='content-container'>
            <div className=" h-screen flex justify-center items-center  drop-shadow-lg">
        <div className=" w-80 bg-white p-12 rounded">
            <h2 className="text-center mb-2 text-sm uppercase">User</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className='w-full border mb-2 p-2' value={user?.displayName}  {...register("user")} />
            <input className='w-full border mb-2 p-2' placeholder='Enter email' value={user?.email}  {...register("email")} />
            <label className="text-center mb-2 text-sm uppercase" >Add Stock Item</label>
            <input className='w-full border mb-2 p-2'  placeholder='name' {...register("name", { required: true})} />
            <input className="w-full border mb-2 p-2" placeholder="img link" {...register("img", { required: true})} />
            <input className="w-full border mb-2 p-2"   placeholder="price" {...register("price", { required: true})} />
            <textarea className="w-full border mb-2 p-2"  placeholder="description" {...register("description", { required: true})} />
            <input className="w-full border mb-2 p-2" placeholder="quantity" type="number" {...register("quantity", { required: true,valueAsNumber: true})} />
            <input className="w-full border mb-2 p-2" placeholder="supplier" {...register("supplier", { required: true})} />
            <input className='bg-purple-500 w-full text-white mb-2 p-2 cursor-pointer' type="submit" value="Add" />
            
          </form>
        </div>
      </div>
        </section>
    );
};

export default AddItem;