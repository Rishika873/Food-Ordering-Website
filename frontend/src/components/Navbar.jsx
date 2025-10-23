import React from "react";
import { ShoppingCart, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-svg.svg"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
         <div className="flex items-center space-x-2 flex-shrink-0">

    <img src={logo} alt="FoodChef Logo" className="h-32 w-32 object-contain" />
  
  {/* <h1 className="text-xl font-bold text-gray-800 hidden sm:block">FOODCHEF</h1> */}
</div>


          {/* Search + Navigation Links */}
          <div className="flex-1 flex items-center justify-center space-x-6">
            {/* Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-gray-50 hover:border-orange-300 transition-colors w-full max-w-md">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search recipes..."
                className="ml-2 outline-none bg-transparent text-sm w-full"
              />
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Home</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">About</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Recipes</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Downloads</li>
            </ul>
          </div>

          {/* Right Side - Cart & Auth */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-orange-50 transition-colors relative">
              <ShoppingCart size={22} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            <div className="hidden sm:flex space-x-3">
              <button
                className="px-5 py-2 border border-gray-300 rounded-full text-sm font-medium hover:border-orange-500 hover:text-orange-500 transition-colors"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="px-5 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search + Auth */}
        <div className="md:hidden mt-3 flex flex-col space-y-3">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search recipes..."
              className="ml-2 outline-none bg-transparent text-sm w-full"
            />
          </div>
          <div className="flex space-x-3">
            <button
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium hover:border-orange-500 hover:text-orange-500 transition-colors"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
