import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from '../components/CartItem';

const Cart = () => {
  
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart?.reduce((acc, curr) => acc+curr.price, 0));
    console.log("cart length");

  }, [cart])
    
  return (
    <div className="w-[95%] sm:w-11/12 max-w-6xl mx-auto mt-10">
      {
        cart?.length > 0 ?
        (<div className="flex flex-col sm:flex-row gap-x-12"> 
            <div className="w-full sm:w-[50%]">
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex = {index} />
                ))
              }
            </div>

            <div className="flex flex-col justify-between w-full sm:w-[30%] pb-2 mb-4">
              <div >
                <div className="font-semibold text-green-600 uppercase">Your Cart</div>
                <div className="text-[35px] leading-6 font-bold text-green-600 uppercase">Summary</div>
                <p className="mt-6 font-semibold text-gray-600">
                  <span>Total Item: {cart.length}</span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-600 text-[14px] mb-2">Total Amount: <span className=" text-[14px] font-bold text-gray-900">${totalAmount}</span></p>
                <button className="w-full py-2 text-center bg-green-600 rounded-lg text-slate-100">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>) :
        (
          <div className="flex items-center justify-center h-screen text-[18px] font-semibold">
            No Item is added
          </div>
        )
      }
    </div>
      
  );
};

export default Cart;
