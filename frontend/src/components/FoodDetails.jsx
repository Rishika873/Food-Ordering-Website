import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Star,
  Clock,
  Flame,
  UtensilsCrossed,
  ArrowLeft,
  Heart,
} from "lucide-react";
import Soup from "../assets/Soup.png";

export default function FoodDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  const item = location.state?.item;

  // Default fallback data
  const defaultDish = {
    name: decodeURIComponent(name) || "Grilled Peri-Peri Chicken",
    image: Soup,
    description:
      "Our signature Grilled Peri-Peri Chicken is flame-grilled to perfection and infused with a smoky blend of African bird’s eye chili, garlic, and herbs. Juicy, spicy, and full of flavor — it’s the perfect mix of heat and savor.",
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
    price: "₹299",
  };

  const dish = { ...defaultDish, ...item };

  return (
    <section className="bg-gradient-to-br from-orange-50 to-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-orange-600 font-medium mb-8 hover:text-orange-700 transition"
        >
          <ArrowLeft className="mr-2 w-5 h-5" /> Back to Menu
        </button>

        {/* Main Dish Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white shadow-xl rounded-3xl p-8 border border-orange-100">
          {/* Left Image */}
          <div className="relative">
            <img
              src={dish.image}
              alt={dish.name}
              className="rounded-3xl w-full h-[420px] object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              Bestseller
            </div>
          </div>

          {/* Right Details */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-gray-900">{dish.name}</h1>
              <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 transition cursor-pointer" />
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
              <span className="text-gray-700 text-sm">{dish.rating} / 5</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-base">
              {dish.description}
            </p>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" /> Prep Time: {dish.prepTime}
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
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Ingredients
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {dish.ingredients.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>

            {/* Nutrition Info */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Nutrition Info
              </h3>
              <div className="grid grid-cols-3 text-center text-gray-700 gap-4">
                <div className="p-3 bg-orange-50 rounded-xl shadow-sm">
                  <p className="font-bold text-lg">{dish.nutrition.protein}</p>
                  <p className="text-xs text-gray-500">Protein</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-xl shadow-sm">
                  <p className="font-bold text-lg">{dish.nutrition.fat}</p>
                  <p className="text-xs text-gray-500">Fat</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-xl shadow-sm">
                  <p className="font-bold text-lg">{dish.nutrition.carbs}</p>
                  <p className="text-xs text-gray-500">Carbs</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between mt-8">
              <p className="text-3xl font-bold text-orange-600">{dish.price}</p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            You Might Also Like 🍴
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border border-orange-100 rounded-2xl p-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition"
              >
                <img
                  src={`https://source.unsplash.com/400x300/?food,meal,${i}`}
                  alt="related"
                  className="rounded-xl mb-4 object-cover w-full h-40"
                />
                <h4 className="font-semibold text-gray-800 mb-1">
                  Chef’s Special Dish {i}
                </h4>
                <p className="text-sm text-gray-500">
                  Try this trending dish today.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
