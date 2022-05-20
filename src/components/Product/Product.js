import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';

const Product = ({product,deleteStock}) => {
    const navigate = useNavigate();
    const { _id, name, img, description, price,quantity,supplier} = product;

    const navigateUpdateStock = (id)=>{
      navigate(`/product/${id}`);
    }

    return (
        
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img}/>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Quantity:{quantity}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
                <p className="mt-1">price {price}</p>
                <div className='flex justify-between'>
                <button onClick={()=>navigateUpdateStock(_id)} className="btn btn-primary bg-purple-400 p-2 rounded">Update</button>

                <button onClick={()=>deleteStock(_id)} className=" text-red-700 bg-slate-100 p-2 rounded"><AiOutlineDelete/></button>
                </div>
              </div>
                            
            </div>
    );
};

export default Product;