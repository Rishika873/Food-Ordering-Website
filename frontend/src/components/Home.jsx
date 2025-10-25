import React, { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import pizzaImage from "../assets/PizzaImage.png";
import Navbar from "./Navbar";
import { Plus } from "lucide-react";
import MexicanTacos from "../assets/Mexican Tacos.png"
import Noodles from "../assets/Noodles.png"
import Sandwich from "../assets/Sandwich.png"
import Springroll from "../assets/Springroll.png"
import Springroll1 from "../assets/Springroll-01.png"
import Seafood from "../assets/Seafood-01.png"
import Seafood1 from "../assets/Seafood.jpg"
import Soup from "../assets/Soup.png"
import Chef01 from "../assets/Chef-01.png"
import Chef02 from "../assets/Chef-02.png"
import Chef03 from "../assets/Chef-03.png"
import Chef04 from "../assets/Chef-04.png"
import Restaurant from "../assets/restaurant-01.jpg"
import Restaurant1 from "../assets/restaurant-02.jpg"
import Restaurant2 from "../assets/restaurant-03.jpg"
import Recipe from "../assets/recipe.jpg"
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";



const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const [addedItems, setAddedItems] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = (itemName) => cartItems.some(i => i.name === itemName);


  const handleCardClick = (item) => {
  navigate(`/food/${item.name}`, 
    { state: {item } });
};

// handle add/remove with toast
const handleAddToCart = (e, item) => {
  e.stopPropagation(); // prevent card click navigation
  if (isInCart(item.name)) {
    dispatch(removeItem(item));
    toast.info(`${item.name} removed from cart`, { autoClose: 1500 });
  } else {
    dispatch(addItem(item));
    toast.success(`${item.name} added to cart`, { autoClose: 1500 });
  }
};
 const menuItems = [
  {
    name: "Crispy Burger",
    description: "Fresh bun, fried chicken, and cheese",
    price: "6.95",
    rating: 5,
    image: Seafood,
  },
  {
    name: "Blue Burger",
    description: "Beef patty with blue cheese sauce",
    price: "8.15",
    rating: 5,
    image: Seafood,
  },
  {
    name: "Roll Rocket",
    description: "Chicken roll with spicy mayo",
    price: "5.05",
    rating: 5,
    image: Soup,
  },
  {
    name: "Spicy Wings",
    description: "Crispy fried chicken wings",
    price: "3.90",
    rating: 5,
    image: Soup,
  },
  {
    name: "Pepperoni Pizza",
    description: "Classic cheese and pepperoni pizza",
    price: "10.25",
    rating: 5,
    image: Soup,
  },
  {
    name: "Margherita Pizza",
    description: "Fresh mozzarella and basil",
    price: "9.50",
    rating: 5,
    image: Soup,
  },
  {
    name: "Grilled Chicken",
    description: "Tender chicken with herbs",
    price: "7.95",
    rating: 5,
    image: Soup,
  },
  {
    name: "Veggie Delight",
    description: "Healthy mix of veggies and sauce",
    price: "6.45",
    rating: 5,
    image: Soup,
  },
];


const categories = [
  { name: "Pizza", image: Seafood, products: 14 },
  { name: "Broast", image: Seafood1, products: 4 },
  { name: "Chicken", image: Soup, products: 5 },
  { name: "Burgers", image: Seafood1, products: 19 },
  { name: "Shakes", image: Springroll1, products: 22 },
  { name: "Sandwiches", image: Sandwich, products: 6 },
  { name: "Pasta", image: Soup, products: 10 },
  { name: "Desserts", image: Seafood1, products: 15 },
  { name: "Desserts", image: Seafood1, products: 15 },
  { name: "Desserts", image: Seafood1, products: 15 },
 
];


const restaurants = [
  {
    name: "Urban Dine",
    address: "123 King Street, New York",
    rating: 4.8,
    image: Restaurant,
  },
  {
    name: "Taste Avenue",
    address: "45 Elm Road, San Francisco",
    rating: 4.5,
    image: Restaurant1,
  },
  {
    name: "Gourmet Garden",
    address: "12 Maple Avenue, Los Angeles",
    rating: 4.9,
    image: Restaurant2,
  },
  {
    name: "Spice Villa",
    address: "88 Curry Lane, Chicago",
    rating: 4.6,
    image: Restaurant,
  },
  {
    name: "The Grill Spot",
    address: "201 Ocean Drive, Miami",
    rating: 4.7,
    image: Restaurant1,
  },
  {
    name: "Sweet Haven",
    address: "33 Dessert Blvd, Seattle",
    rating: 4.4,
    image: Restaurant2,
  },
];




  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 font-sans">
        <Navbar/>
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-4">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Fresh & Delicious Meals Delivered to You
            </h2>
            <h3 className="text-3xl font-semibold text-gray-800">
              Order your favorite food online in a few clicks
            </h3>
            <p className="text-gray-600 text-lg">
             Hungry? We’ve got you covered! Fresh, tasty meals delivered to your door.

            </p>
            <button className="bg-orange-500 text-white hover:bg-orange-600 transition-colors px-8 py-3 rounded-xl font-medium shadow-lg transform hover:scale-105 cursor-pointer">
              Get Started
            </button>

          </div>

          {/* Right Content - Pizza Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="bg-orange-200 rounded-full w-100 h-100 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform">
              <img
                src={pizzaImage}
                alt="Pizza"
                loading="lazy"
                className="w-200 h-200 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

{/* Our Categories Section */}
<section className="bg-white py-4">
  <div className="max-w-4xl mx-auto px-6 text-center">
    {/* Heading */}
    <div className="mb-8">
      <h2 className="text-4xl font-bold text-gray-900 mt-4">
        Our Categories
      </h2>
    </div>

    {/* Categories Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {categories.map((cat, index) => (
        <div
          key={index}
          onClick={() => setActiveCategory(cat.name)}
          className="flex flex-col items-center text-center group cursor-pointer mb-4"
        >
          {/* Image Wrapper */}
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-md flex items-center justify-center mb-4 bg-white transition-transform duration-300 group-hover:scale-105">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Category Name */}
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {cat.name}
          </h3>

          {/* Product Count */}
          <p className="text-sm text-gray-500">
            {cat.products} Restaurants Products
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Today's Menu Section */}
<section className="bg-white py-2">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-gray-900">
        <span className="text-orange-500">Today’s</span> Menu
      </h2>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10 ">
      {menuItems.map((item, index) => (
        <div
          key={index}
          
          className="bg-orange-50 text-gray-800 rounded-2xl border border-gray-200 overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-400 cursor-pointer"
        >
          {/* Image */}
          <div className="w-full h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card Content */}
          <div className="p-5 flex flex-col justify-between h-44" onClick={() => handleCardClick(item)}>
            <div>
             <h3 className="text-lg font-semibold mb-1 text-gray-800">
                {item.name}
              </h3>
                <p className="text-sm mb-2 text-gray-500">
                {item.description}
              </p>

              {/* Rating */}
              <div className="flex justify-center sm:justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                   fill={i < Math.floor(item.rating) ? "#f97316" : "#e5e7eb"}
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.457a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.457a1 1 0 00-1.176 0l-3.38 2.457c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
              </div>
            </div>

         {/* Price + Add Button */}
<div className="flex justify-between items-center">
  <p className="font-semibold text-orange-500">${item.price}</p>
  <button
  onClick={(e) => handleAddToCart(e, item)}
  className={`p-2 rounded-full transition ${
    isInCart(item.name)
      ? "bg-green-100 hover:bg-green-200"
      : "bg-orange-100 hover:bg-orange-200"
  }`}
>
  {isInCart(item.name) ? (
    // Check Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#12853cff"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ) : (
    // Plus Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#f92d16ff"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  )}
</button>
</div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Meet With the Chef */}
<section className="max-w-7xl mx-auto px-6 py-8">
  <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
    Meet the Chef
  </h2>

  {/* Chef Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      { name: "Chef Antonio", specialty: "Italian Cuisine", image: Chef01 },
      { name: "Chef Mei Lin", specialty: "Asian Fusion", image: Chef02 },
      { name: "Chef Carlos", specialty: "Mexican Dishes", image: Chef03 },
      { name: "Chef Marie", specialty: "French Pastries", image: Chef04 },
    ].map((chef, index) => (
      <div
        key={index}
        className="bg-white rounded-3xl border-2 border-gray-200 p-6 hover:shadow-2xl hover:translate-y-[-2px] transition-transform transition-shadow text-center"
      >
        {/* Chef Image */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-orange-400 shadow-md mb-4">
          <img
            src={chef.image}
            alt={chef.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Chef Info */}
        <h3 className="text-lg font-semibold text-gray-800">{chef.name}</h3>
        <p className="text-gray-500 text-sm">{chef.specialty}</p>
      </div>
    ))}
  </div>
</section>

{/* Popular Restaurants Section */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-gray-900">
        <span className="text-orange-500">Popular</span> Restaurants
      </h2>
    </div>

    {/* Restaurant Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-6">
      {restaurants.map((res, index) => (
        <div
          key={index}
          className="bg-orange-50 rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-400"
        >
          {/* Image */}
          <div className="w-full h-52 overflow-hidden">
            <img
              src={res.image}
              alt={res.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col justify-between h-52">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {res.name}
              </h3>
              <p className="text-sm text-gray-500 flex items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="#f97316"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z"
                  />
                  <circle cx="12" cy="8" r="2.5" />
                </svg>
                {res.address}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={i < Math.floor(res.rating) ? "#f97316" : "#e5e7eb"}
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.457a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.457a1 1 0 00-1.176 0l-3.38 2.457c-.785.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600 text-sm font-medium">
                  {res.rating.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="flex-1 mr-2 bg-orange-500 text-white py-2 rounded-full font-medium hover:bg-orange-600 transition">
                Explore Food
              </button>
              <button className="flex-1 ml-2 border border-orange-400 text-orange-500 py-2 rounded-full font-medium hover:bg-orange-100 transition">
                Book Table
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


 {/* Dual Function Section */}
<section className="bg-white py-1">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900">
        What Would You Like To Do?
      </h2>
    </div>

    {/* Action Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
      {/* Book Table Card */}
      <div className="relative bg-orange-50 rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <img
          src={Restaurant}
          alt="Book a Table"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative p-10 text-center flex flex-col items-center justify-center h-full">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="#f97316"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3M4 11h16M4 19h16M5 11v8m14-8v8"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Reserve Your Table
          </h3>
          <p className="text-black-600 mb-6">
            Book your favorite spot instantly and enjoy a great dining experience.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>

      {/* Explore Recipes Card */}
      <div className="relative bg-orange-50 rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <img
          src={Recipe}
          alt="Explore Recipes"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative p-10 text-center flex flex-col items-center justify-center h-full">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="#f97316"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Explore Delicious Recipes
          </h3>
          <p className="text-black-600 mb-6">
            Browse a curated collection of dishes from your favorite restaurants.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition transform hover:scale-105">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer Spacing */}
      <div className="h-16">
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
