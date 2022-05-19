import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
// https://api.lorem.space/image/movie?w=200&h=280

const UpdateStock = () => {
    const { register, handleSubmit,reset } = useForm();
  const { productId } = useParams();
  const[product,setProduct] = useState({});
  useEffect(()=>{
      const url =`http://localhost:3006/product/${productId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setProduct(data))
},[product])


    const handleDelivered= ()=>{
            
        const quantity = product.quantity;
        console.log("updating...",{quantity});
        fetch(`http://localhost:3006/product/${productId}`, {
        method: 'PUT',
        body: JSON.stringify({
        quantity
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) =>{
        
      } );
          
    }
    const onSubmit = data => {
        const url = ``
      fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
          reset();
    };

  return (
    <section className="text-gray-600 body-font bg-black ">
      <div className=" lg:h-screen container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-2 lg:pr-0 pr-0">
          <div className="flex flex-col lg:flex-row gap-2 bg-slate-200 shadow-xl p-10">
            <figure className="p-5">
              <img
                src="https://api.lorem.space/image/movie?w=200&h=280"
                alt="Movie"
              />
            </figure>
            <div className="w-full">
              <h2 className="text-2xl">{product.name}</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero error sed illo soluta deserunt? Tenetur assumenda hic aperiam, aliquid, quia nam nemo iusto dolor eius rem a saepe earum recusandae?</p>
              
              <div className="flex justify-between pt-10">
                <button className=" bg-white text-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-slate-100 rounded text-lg">Quantity :{product.quantity}</button>
                <button onClick={handleDelivered} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Delivered</button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Stock update
          </h2>
          <div className="relative mb-4">
            <label for="full-name" className="leading-7 text-sm text-gray-600">
              Stock img
            </label>
            
          </div>
          <div className="relative mb-4">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label for="email" className="leading-7 text-sm text-gray-600">
              Quantity
            </label>
            <input
              type="number"            
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              {...register("quantity", { required: true,valueAsNumber: true})}
            />
            </form>
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Add Stock
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpdateStock;
