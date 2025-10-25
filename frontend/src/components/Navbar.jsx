import React, { useState, useEffect } from "react";
import { ShoppingCart, Search, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-svg.svg"
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
 const cartCount = useSelector(state => state.cart.items.length);

   // Fetch user info when Navbar loads
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);
const handleLogout = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/logout",
      {},
      { withCredentials: true }
    );

    // Show toast
    toast.success(res.data.message || "Logout successful");

    // Clear user state
    setUser(null);

    // Navigate after a short delay so toast is visible
    setTimeout(() => {
      navigate("/login");
    }, 800); // 0.8 seconds delay
  } catch (err) {
    toast.error(err.response?.data?.message || "Logout failed");
  }
};


  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
         <div className="flex items-center space-x-2 flex-shrink-0">

    <img src={logo} alt="FoodChef Logo" className="h-32 w-32 object-contain cursor-pointer" onClick={() => navigate("/")} />
  
  {/* <h1 className="text-xl font-bold text-gray-800 hidden sm:block">FOODCHEF</h1> */}
</div>


          {/* Search + Navigation Links */}
          <div className="flex-1 flex items-center justify-center space-x-16">
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
              <li className="hover:text-orange-500 cursor-pointer transition-colors" onClick={() => navigate("/")}>Home</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Categories</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors"  onClick={() => navigate("/recipes")}>Recipes</li>
              <li className="hover:text-orange-500 cursor-pointer transition-colors">Restaurants</li>
            </ul>
          </div>

          {/* Right Side - Cart & Auth */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-orange-50 transition-colors relative cursor-pointer" onClick={() => navigate("/cart")}>
              <ShoppingCart size={22} className="text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>

             {user ? (
              <div className="flex items-center space-x-2 cursor-pointer">
                <User size={22} className="text-gray-700" />
                <span className="font-medium text-gray-700">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="ml-2 px-8 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (

            <div className="hidden sm:flex space-x-3">
              <button
                className="px-8 py-2 border border-gray-300 rounded-full text-sm font-medium hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="px-7 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors shadow-sm cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
            {/* Toast Container */}
            {/* <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            /> */}
    </nav>
  );
};

export default Navbar;
