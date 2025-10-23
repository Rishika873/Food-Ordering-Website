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
import Footer from "./Footer";


const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const menuItems = [
  {
    name: "Vegetable Spring Rolls",
    ingredients: "Tomato, lettuce, capsicum",
    price: "$325.00/$348",
    image: Springroll,
  },
  {
    name: "Mexican Tacos with Meat",
    ingredients: "Meat, lettuce, capsicum",
    price: "$325.00/$348",
    image: MexicanTacos,
  },
  {
    name: "Sandwich with Tomatoes",
    ingredients: "Tomato, lettuce, cucumber",
    price: "$325.00/$348",
    image: Sandwich,
  },
  {
    name: "Fried Spring Rolls",
    ingredients: "Tomato, lettuce, capsicum",
    price: "$325.00/$348",
    image: Springroll1,
  },
  {
    name: "Pho Ga, Noodles",
    ingredients: "Noodles, lettuce, capsicum",
    price: "$325.00/$348",
    image: Noodles,
  },
  {
    name: "Spring Rolls with Cheese",
    ingredients: "Tomato, lettuce, capsicum",
    price: "$325.00/$348",
    image: Seafood,
  },
  {
    name: "Shrimp Spicy Soup",
    ingredients: "Shrimp, lettuce, capsicum",
    price: "$325.00/$348",
    image: Soup,
  },
  {
    name: "Seafood",
    ingredients: "Noodles, seafood, capsicum",
    price: "$325.00/$348",
    image: Seafood,
  },
];


  const categories = ["All", "Pizza", "Burger", "Salad", "Dessert", "Drinks", "Specials", "Combo"];

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

      {/* Top Categories */}
      <section className="max-w-7xl mx-auto px-6 py-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Categories</h2>
        <div className="flex gap-4 overflow-x-auto pb-8">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all transform hover:scale-100 cursor-pointer ${
                cat === activeCategory
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-orange-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Today's Menu */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">Today's Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all border border-gray-200 overflow-hidden"
        >
          <div className="relative w-full h-40">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex flex-col justify-between h-36">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name.toUpperCase()}
              </h3>
              <p className="text-sm text-gray-500">
                Ingredients: {item.ingredients}
              </p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-red-500 font-semibold text-sm">
                PRICE: <span className="text-gray-800">{item.price}</span>
              </p>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                <Plus className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      ))}
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


      {/* Reserve a Table */}
      <section className="max-w-7xl mx-auto px-6 py-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Reserve Your Table</h2>
        <button className="bg-orange-500 text-white px-10 py-4 rounded-xl font-medium text-lg hover:bg-orange-600 shadow-lg transform hover:scale-105 transition-all cursor-pointer">
          Book Table
        </button>
      </section>

      {/* Footer Spacing */}
      <div className="h-16">
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
