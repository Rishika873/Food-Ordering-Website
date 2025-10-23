import React, { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import pizzaImage from "../assets/PizzaImage.png";
import Navbar from "./Navbar";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Pizza", "Burger", "Salad", "Dessert", "Drinks", "Specials", "Combo"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 font-sans">
        <Navbar/>
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Today's Special
            </h2>
            <h3 className="text-4xl font-semibold text-gray-800">
              Fresh Food Menu
            </h3>
            <p className="text-gray-600 text-lg">
              Hungry? Order your favorite dishes easily with our web platform.
            </p>
            <button className="bg-orange-500 text-white hover:bg-orange-600 transition-colors px-8 py-3 rounded-xl font-medium shadow-lg transform hover:scale-105 cursor-pointer">
              Get Started
            </button>

            {/* Decorative Gray Box (optional) */}
            <div className="bg-gray-200 h-48 rounded-3xl shadow-inner mt-8"></div>
          </div>

          {/* Right Content - Pizza Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="bg-orange-200 rounded-full w-80 h-80 flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform">
              <img
                src={pizzaImage}
                alt="Pizza"
                className="w-4/5 h-4/5 object-contain rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Categories</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all transform hover:scale-105 ${
                cat === activeCategory
                  ? "bg-green-700 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-green-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Today's Menu */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Today's Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border-2 border-gray-200 p-4 h-64 hover:shadow-2xl hover:translate-y-[-4px] transition-transform transition-shadow"
            >
              <div className="h-36 w-full bg-gray-100 rounded-2xl mb-4 animate-pulse"></div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Delicious Item</h3>
              <p className="text-gray-500">Short description goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet With the Chef */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Meet the Chef</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border-2 border-gray-200 p-6 hover:shadow-2xl hover:translate-y-[-2px] transition-transform transition-shadow text-center"
            >
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full border-2 border-gray-300 mb-4"></div>
              <h3 className="text-lg font-semibold">Chef Name</h3>
              <p className="text-gray-500 text-sm">Expert in Italian Cuisine</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reserve a Table */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">Reserve Your Table</h2>
        <button className="bg-red-600 text-white px-10 py-4 rounded-xl font-medium text-lg hover:bg-red-700 shadow-lg transform hover:scale-105 transition-all">
          Book Table
        </button>
      </section>

      {/* Footer Spacing */}
      <div className="h-16"></div>
    </div>
  );
};

export default HomePage;
