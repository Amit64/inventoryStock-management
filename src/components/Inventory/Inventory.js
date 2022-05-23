import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import './Inventory.css'

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [pageCount,setPageCount] = useState(0);
  const [page,setPage] = useState();
  const navigate = useNavigate()



  useEffect(() => {
    fetch(`http://localhost:3006/products?page=${page}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products,page]);

  useEffect(()=>{
    axios.get('http://localhost:3006/product-count')
   .then((res) => {
      const productCount = res?.data?.count;
     //console.log("count product",count);
     const pages = Math.ceil(productCount/5);
     setPageCount(pages);
   })
   

     
 },[page])

  const deleteStock = (id) => {
    let isExecuted = window.confirm("Are you sure to execute this action?");
    if (isExecuted) {
      const url = `http://localhost:3006/delete-stock/${id}`;
      fetch(url, {
        method: "DELETE",
      });
    }
  };
  return (
    <section className="text-gray-600 body-font content-container">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20 border-style ">
          <h1 className="text-5xl ">Inventory</h1>
        <button onClick={()=>navigate("/additem")} className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Product</button>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Image
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Name
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  supplier
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Quantity
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Update
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Delete
                </th>
                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => (
                  <Product
                    key={product._id}
                    product={product}
                    deleteStock={deleteStock}
                  ></Product>
                ))}
                <div className="pagination">
                {
                    [...Array(pageCount).keys()]
                    .map(number => <button className={page===number? 'selected': 'pagination'}
                      onClick={()=> setPage(number)}
                    >
                      {number+1}
                    </button>)
                  }
                  
                </div>
                
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Inventory;




