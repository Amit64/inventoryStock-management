import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from 'react-icons/ai';

const Items = ({myItem,deleteStock}) => {
    const navigate = useNavigate();
    const { _id, name, img, description, price,quantity,supplier} = myItem;

    const navigateUpdateStock = (id)=>{
      navigate(`/product/${id}`);
    }

  return (
    <tr>
      <td className="border-b-2 border-gray-200 px-4 py-3">
        <img
          className="w-24"
          src={img}
          alt={name}
        />
      </td>
      <td className="border-b-2 border-gray-200 px-4 py-3">{name}</td>
      <td className="border-b-2 border-gray-200 px-4 py-3">{supplier}</td>
      <td className="border-b-2 border-gray-200 px-4 py-3">{quantity}</td>
      <td className="border-b-2 border-gray-200 px-4 py-3"><button onClick={()=>navigateUpdateStock(_id)} className="text text-white bg-blue-400 p-2 rounded">Update</button></td>
      <td className="px-4 py-3 text-lg text-gray-900"><button onClick={()=>deleteStock(_id)} className="transition ease-in-out delay-150 hover:-translate-y-1  duration-300  text-red-700 bg-slate-100 p-2 rounded"><AiOutlineDelete className=' hover:scale-150'/></button></td>
    </tr>
  );
};

export default Items;
