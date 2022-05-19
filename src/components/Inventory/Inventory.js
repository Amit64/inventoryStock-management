import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Inventory = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3006/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <section className="text-gray-600 body-font content-container">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
         {
             products.map(product =><Product
             key={product._id}
             product={product}
             ></Product>)
         }
        </div>
        </div>
      </section>
    );
};

export default Inventory;