import { NavLink } from "react-router-dom";
import logo from '../logo.png';
import {GiShoppingCart} from 'react-icons/gi'
import { useSelector } from "react-redux";


const Navbar = () => {
 
  const {cart} = useSelector((state) => state);

  return (
    <div className="w-full">
      <nav className="flex items-center justify-between w-11/12 h-20 max-w-6xl mx-auto">
        <NavLink to='/'>
          <img src={logo}  alt="" className="h-14"/>
        </NavLink>

        <div className="flex items-center text-slate-100 gap-x-4">
          <NavLink to='/'>
           <p >Home</p>
          </NavLink>
          <NavLink to='/Cart' className="relative" >
            <GiShoppingCart className="text-2xl"/>
            {
              cart.length > 0 &&
              <span className="absolute flex items-center justify-center w-5 h-5 bg-green-600 rounded-full -top-1 -right-2 animate-bounce">
                {cart.length}
              </span>
            }
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
