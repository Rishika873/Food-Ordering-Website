import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Star, Clock, Flame, UtensilsCrossed, Heart } from "lucide-react";
import Soup from "../assets/Soup.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FoodDetailsPage() {
  const location = useLocation();
  const { name } = useParams();
  const item = location.state?.item;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Default fallback data
  const defaultDish = {
    name: decodeURIComponent(name) || "Grilled Peri-Peri Chicken",
    image: Soup,
    description:
      "Our signature Grilled Peri-Peri Chicken is flame-grilled to perfection...",
    ingredients: [
      "Fresh Chicken Breast",
      "Peri-Peri Sauce",
      "Garlic & Herbs",
      "Lemon Juice",
      "Olive Oil",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "42g",
      fat: "21g",
      carbs: "12g",
    },
    prepTime: "25 mins",
    rating: 4.7,
    price: "299",
  };

  const dish = { ...defaultDish, ...item };

  // Check if item is in cart
  const isInCart = cartItems.some((i) => i.name === dish.name);

  const handleCartToggle = () => {
    if (isInCart) {
      dispatch(removeItem(dish));
      toast.info(`${dish.name} removed from cart`, { autoClose: 1500 });
    } else {
      dispatch(addItem(dish));
      toast.success(`${dish.name} added to cart`, { autoClose: 1500 });
    }
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 to-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100 hover:shadow-[0_0_30px_rgba(255,165,0,0.2)] transition-all duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src={dish.image}
                alt={dish.name}
                className="rounded-3xl w-full h-[420px] object-cover shadow-lg hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                Bestseller
              </div>
            </div>

            {/* Details */}
            <div className="space-y-5">
              <div className="flex items-start justify-between">
                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                  {dish.name}
                </h1>
                <Heart
                  onClick={handleCartToggle}
                  className={`w-7 h-7 cursor-pointer transition-colors duration-300 ${
                    isInCart ? "text-red-500 fill-red-500" : "text-gray-400"
                  }`}
                />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(dish.rating)
                          ? "text-orange-500 fill-orange-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  {dish.rating} / 5
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base">
                {dish.description}
              </p>

              {/* Info Tags */}
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4" /> {dish.prepTime}
                </span>
                <span className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-medium">
                  <Flame className="w-4 h-4" /> {dish.nutrition.calories}
                </span>
                <span className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-medium">
                  <UtensilsCrossed className="w-4 h-4" /> High Protein
                </span>
              </div>

              {/* Ingredients */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3 border-b border-orange-100 pb-1">
                  Ingredients
                </h3>
                <ul className="grid grid-cols-2 gap-x-5 gap-y-1 text-gray-700 text-sm">
                  {dish.ingredients.map((ing, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nutrition Info */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3 border-b border-orange-100 pb-1">
                  Nutrition Info
                </h3>
                <div className="grid grid-cols-3 text-center text-gray-700 gap-4">
                  <div className="p-4 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
                    <p className="font-bold text-lg text-orange-600">{dish.nutrition.protein}</p>
                    <p className="text-xs text-gray-500">Protein</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
                    <p className="font-bold text-lg text-orange-600">{dish.nutrition.fat}</p>
                    <p className="text-xs text-gray-500">Fat</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-xl shadow-sm hover:shadow-md transition">
                    <p className="font-bold text-lg text-orange-600">{dish.nutrition.carbs}</p>
                    <p className="text-xs text-gray-500">Carbs</p>
                  </div>
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mt-8">
                <p className="text-3xl font-bold text-orange-600">₹{dish.price}</p>
                <button
                  onClick={handleCartToggle}
                  className={`${
                    isInCart
                      ? "bg-gradient-to-r from-green-700 to-green-600"
                      : "bg-gradient-to-r from-orange-500 to-red-500"
                  } text-white px-10 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer`}
                >
                  {isInCart ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer position="top-center" />
    </section>
  );
}
