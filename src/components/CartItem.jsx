import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

 
const CartItem = ({item}) => {
  
  const dispatch = useDispatch();
  function removeFromCart() {
    dispatch(remove(item.id));
    console.log("Item removed");
    toast.success("Item removed");
  }
  return (
    <div className="flex py-6 border-b-2 border-gray-500 gap-x-10">
      <div className="h-[180px] pl-8">
        <img src={item.image} alt="" className="w-full h-full"/>
      </div>
      <div className="w-[60%] flex flex-col gap-y-4 px-4">
        <h1 className="font-bold">{item.title}</h1>
        <p className="text-[13px] text-gray-600">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
        <div className="flex justify-between">
          <p className="text-green-500 font-bold text-[14px]">${item.price}</p>
          <button onClick={removeFromCart} 
            className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-red-200">
            <FcDeleteDatabase/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
