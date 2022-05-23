import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Feature from './Feature';

const FeatureProduct = () => {
    const navigate = useNavigate();
    const [fetProduct,setFetProduct] = useState([]);
    useEffect(()=>{
        axios.get('https://mcare-inventory.herokuapp.com/limit-product')
        .then(res=>{
            const data = res.data;
            setFetProduct(data);
            console.log(data);
        })
    },[])



    return (
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Featured Items</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">M Care BD is a famous Online Store and inventory service for Medical Equipment in Bangladesh</p>
    </div>
    <div className="flex flex-wrap -m-4">
     
    {
        fetProduct.map(product=><Feature
            key={product._id}
            product={product}
            
        ></Feature>)
    }

   
    </div>
    <button onClick={()=>navigate("/inventory")} className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Manage Inventory</button>
  </div>
</section>
    );
};

export default FeatureProduct;