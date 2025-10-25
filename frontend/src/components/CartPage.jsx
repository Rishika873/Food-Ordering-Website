import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2, Minus, Plus, ShoppingBag, Tag, Sparkles, Gift } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (item) => {
    dispatch(removeItem(item));
    toast.info(`${item.name} removed from cart`, { autoClose: 1500 });
  };

  const handleQuantityChange = (item, type) => {
    const newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
    if (newQty < 1) return;
    dispatch(updateQuantity({ ...item, quantity: newQty }));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const deliveryFee = totalPrice > 299 ? 0 : 49;
  const savings = totalPrice > 299 ? 49 : 0;
  const finalTotal = totalPrice + deliveryFee;

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-4 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Continue Shopping</span>
          </button>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 flex items-center gap-3">
            <ShoppingBag className="w-10 h-10 text-orange-500" />
            Your Cart
            {cartItems.length > 0 && (
              <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full text-lg font-bold">
                {cartItems.length}
              </span>
            )}
          </h1>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-4">
              {/* Free Delivery Banner */}
              {totalPrice < 299 && (
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Gift className="w-6 h-6 flex-shrink-0" />
                    <p className="text-sm font-semibold">
                      Add items worth ₹{(299 - totalPrice).toFixed(2)} more to get FREE delivery! 🎉
                    </p>
                  </div>
                  <div className="mt-3 bg-white/20 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-white h-full rounded-full transition-all duration-300"
                      style={{ width: `${(totalPrice / 299) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Cart Items */}
              {cartItems.map((dish, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-orange-100 group"
                >
                  <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                    {/* Dish Image */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full sm:w-36 h-36 object-cover rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        #{index + 1}
                      </div>
                    </div>

                    {/* Dish Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {dish.name}
                        </h2>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {dish.description || "Delicious and freshly prepared"}
                        </p>
                        
                        {/* Price per item */}
                        <p className="text-gray-500 text-sm mt-2">
                          <span className="font-medium">Price per item:</span>{" "}
                          <span className="text-orange-600 font-semibold">₹{dish.price}</span>
                        </p>
                      </div>

                      {/* Controls */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
                        {/* Quantity Control */}
                        <div className="flex items-center gap-1 bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 rounded-full p-1 shadow-md">
                          <button
                            onClick={() => handleQuantityChange(dish, "dec")}
                            className="w-9 h-9 flex items-center justify-center bg-white hover:bg-orange-500 hover:text-white rounded-full transition-all duration-200 shadow-sm"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-5 font-bold text-lg text-gray-900">
                            {dish.quantity || 1}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(dish, "inc")}
                            className="w-9 h-9 flex items-center justify-center bg-white hover:bg-orange-500 hover:text-white rounded-full transition-all duration-200 shadow-sm"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Total Price */}
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-xs text-gray-500 font-medium">Total</p>
                            <p className="text-2xl font-extrabold text-orange-600">
                              ₹{(dish.price * (dish.quantity || 1)).toFixed(2)}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => handleRemove(dish)}
                            className="flex items-center gap-2 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-full font-semibold transition-all duration-200 shadow-sm hover:shadow-md group"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="hidden sm:inline">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border-2 border-orange-100 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-6 h-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Item Count */}
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="font-medium">Items ({cartItems.length})</span>
                    <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
                  </div>

                  {/* Delivery Fee */}
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="font-medium">Delivery Fee</span>
                    {deliveryFee === 0 ? (
                      <span className="text-green-600 font-bold flex items-center gap-1">
                        <Gift className="w-4 h-4" />
                        FREE
                      </span>
                    ) : (
                      <span className="font-semibold">₹{deliveryFee.toFixed(2)}</span>
                    )}
                  </div>

                  {/* Savings */}
                  {savings > 0 && (
                    <div className="flex justify-between items-center bg-green-50 rounded-lg p-3 border border-green-200">
                      <span className="font-medium text-green-700">You Saved</span>
                      <span className="font-bold text-green-600">₹{savings.toFixed(2)}</span>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="border-t-2 border-dashed border-orange-200 my-4"></div>

                  {/* Total */}
                  <div className="flex justify-between items-center bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 border-2 border-orange-200">
                    <span className="text-xl font-bold text-gray-900">Total Amount</span>
                    <span className="text-3xl font-extrabold text-orange-600">
                      ₹{finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust Badges */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="font-medium">Safe & Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <span className="font-medium">Delivery in 30-40 mins</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Tag className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-medium">Best prices guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Empty Cart State
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-16 h-16 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Cart is Empty</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Looks like you haven't added anything to your cart yet.
              </p>
              <button
                onClick={() => navigate("/")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5 rotate-180" />
                Start Shopping
              </button>
            </div>
          </div>
        )}
      </div>

      <ToastContainer position="top-center" />
    </section>
  );
}