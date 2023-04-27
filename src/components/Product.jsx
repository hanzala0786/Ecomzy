// import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from '../redux/Slices/CartSlice';

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(post.id));
    toast.success("Item remove from the cart");
  }

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  return (
    <div className="w-[95%] flex flex-col gap-4  items-center justify-center p-4 mb-6 sm:mb-0 mx-auto sm:mx-0 transition-all duration-300 border rounded-lg shadow-md hover:shadow-2xl hover:scale-105 sm:hover:scale-110">
      <div>
        <p className="w-40 mt-1 text-lg font-semibold text-left text-gray-700 truncate">{post.title}</p>
      </div>
      <div>
        <p className="w-60 sm:w-40 font-normal text-[10px] text-left text-gray-400">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
          <img src={post.image} alt="" className="w-full h-full"/>
      </div>
      <div className="flex items-center justify-between w-full pt-4">
        <p className="text-green-500 font-bold text-[14px]">${post.price}</p>
        <div className="px-3 py-1 border-2 rounded-full border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-slate-100 transition-all duration-300 text-[11px] font-bold">
        {
            (cart?.some((p) => p.id === post.id))?
            (<button onClick={removeFromCart} className="uppercase">
              Remove Item
              </button>) : 
            (<button onClick={addToCart} className="uppercase">
              Add to Cart
              </button>)
        }
        </div>
      </div>
      
    </div>
  );
};

export default Product;
