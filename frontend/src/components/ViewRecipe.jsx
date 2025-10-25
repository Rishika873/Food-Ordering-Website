import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, ChefHat, Heart, Flame, Leaf, Star, BookmarkPlus, Share2, Printer, Play, CheckCircle2, Circle } from 'lucide-react';
import Navbar from './Navbar';


function ViewRecipe() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [activeTab, setActiveTab] = useState('ingredients');

  // Sample recipe data
  const recipe = {
    id: 1,
    name: "Classic Butter Chicken",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    description: "Tender chicken pieces cooked in a rich, creamy tomato-based gravy with aromatic spices. This restaurant-style butter chicken is perfect for special occasions and weekend dinners.",
    prepTime: "20 mins",
    cookTime: "40 mins",
    totalTime: "1 hour",
    servings: 4,
    difficulty: "Medium",
    cuisine: "Indian",
    rating: 4.9,
    reviews: 342,
    calories: 450,
    isVeg: false,
    isSpicy: true,
    author: {
      name: "Chef Priya Sharma",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      recipes: 127
    },
    ingredients: [
      { item: "Chicken breast, boneless", quantity: "500g" },
      { item: "Tomato puree", quantity: "2 cups" },
      { item: "Heavy cream", quantity: "1 cup" },
      { item: "Butter", quantity: "2 tbsp" },
      { item: "Yogurt", quantity: "1/2 cup" },
      { item: "Garam masala", quantity: "1 tbsp" },
      { item: "Red chili powder", quantity: "1 tsp" },
      { item: "Turmeric powder", quantity: "1/2 tsp" },
      { item: "Ginger-garlic paste", quantity: "2 tbsp" },
      { item: "Kasuri methi (dried fenugreek)", quantity: "1 tsp" },
      { item: "Fresh coriander", quantity: "For garnish" },
      { item: "Salt", quantity: "To taste" }
    ],
    steps: [
      {
        number: 1,
        title: "Marinate the Chicken",
        description: "Cut chicken into bite-sized pieces. Mix with yogurt, half of the ginger-garlic paste, red chili powder, and salt. Let it marinate for at least 30 minutes.",
        time: "30 mins"
      },
      {
        number: 2,
        title: "Grill the Chicken",
        description: "Heat a grill pan or oven. Cook the marinated chicken pieces until they are slightly charred and cooked through. Set aside.",
        time: "10 mins"
      },
      {
        number: 3,
        title: "Prepare the Gravy",
        description: "In a large pan, melt butter over medium heat. Add remaining ginger-garlic paste and sauté for 1 minute until fragrant.",
        time: "2 mins"
      },
      {
        number: 4,
        title: "Add Tomatoes and Spices",
        description: "Add tomato puree, turmeric, garam masala, and salt. Cook on medium heat for 10 minutes, stirring occasionally until the gravy thickens.",
        time: "10 mins"
      },
      {
        number: 5,
        title: "Add Cream",
        description: "Reduce heat to low and add heavy cream. Stir well and let it simmer for 5 minutes. The gravy should be smooth and creamy.",
        time: "5 mins"
      },
      {
        number: 6,
        title: "Combine and Finish",
        description: "Add the grilled chicken pieces to the gravy. Crush kasuri methi between your palms and add to the curry. Simmer for 5 more minutes.",
        time: "5 mins"
      },
      {
        number: 7,
        title: "Garnish and Serve",
        description: "Garnish with fresh coriander and a drizzle of cream. Serve hot with naan bread or basmati rice.",
        time: "2 mins"
      }
    ],
    nutritionFacts: [
      { label: "Calories", value: "450 kcal" },
      { label: "Protein", value: "32g" },
      { label: "Carbs", value: "18g" },
      { label: "Fat", value: "28g" },
      { label: "Fiber", value: "3g" },
      { label: "Sugar", value: "8g" }
    ],
    tips: [
      "For a richer flavor, you can add a tablespoon of honey or sugar to balance the acidity of tomatoes.",
      "Kasuri methi (dried fenugreek leaves) is essential for authentic flavor. Don't skip it!",
      "If you don't have heavy cream, you can use cashew paste mixed with milk as a substitute.",
      "Let the gravy cook on low heat - patience is key for developing deep flavors."
    ]
  };

  const toggleStep = (stepNumber) => {
    setCompletedSteps(prev =>
      prev.includes(stepNumber)
        ? prev.filter(n => n !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <Navbar/>
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Recipes</span>
            </button>

            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-orange-100 rounded-full transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-orange-100 rounded-full transition-colors">
                <Printer className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-orange-100 rounded-full transition-colors">
                <BookmarkPlus className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 border-2 border-orange-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-96 md:h-auto">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
              
              {/* Image Overlays */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className={`text-sm font-bold px-4 py-2 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </span>
                {recipe.isVeg && (
                  <span className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2">
                    <Leaf className="w-4 h-4" />
                    Vegetarian
                  </span>
                )}
                {recipe.isSpicy && (
                  <span className="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    Spicy
                  </span>
                )}
              </div>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isFavorite
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-600'
                  }`}
                />
              </button>

              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full">
                {recipe.calories} calories
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">{recipe.name}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">{recipe.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-green-600 fill-current" />
                  <span className="font-bold text-green-700 text-lg">{recipe.rating}</span>
                </div>
                <span className="text-gray-600">({recipe.reviews} reviews)</span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6 text-orange-500" />
                    <span className="text-sm text-gray-600">Total Time</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{recipe.totalTime}</p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-orange-500" />
                    <span className="text-sm text-gray-600">Servings</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{recipe.servings} people</p>
                </div>
              </div>

              {/* Chef Info */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-4">
                  <img
                    src={recipe.author.image}
                    alt={recipe.author.name}
                    className="w-16 h-16 rounded-full border-4 border-white"
                  />
                  <div>
                    <p className="text-sm opacity-90 mb-1">Recipe by</p>
                    <h3 className="text-xl font-bold">{recipe.author.name}</h3>
                    <p className="text-sm opacity-90">{recipe.author.recipes} recipes shared</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Instructions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="bg-white rounded-3xl shadow-xl p-2 border-2 border-orange-100">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('ingredients')}
                  className={`flex-1 py-3 rounded-2xl font-semibold transition-all ${
                    activeTab === 'ingredients'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-orange-50'
                  }`}
                >
                  Ingredients
                </button>
                <button
                  onClick={() => setActiveTab('instructions')}
                  className={`flex-1 py-3 rounded-2xl font-semibold transition-all ${
                    activeTab === 'instructions'
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-orange-50'
                  }`}
                >
                  Instructions
                </button>
              </div>
            </div>

            {/* Ingredients Tab */}
            {activeTab === 'ingredients' && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-orange-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
                <div className="space-y-4">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors"
                    >
                      <span className="text-gray-800 font-medium">{ingredient.item}</span>
                      <span className="text-orange-600 font-bold">{ingredient.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructions Tab */}
            {activeTab === 'instructions' && (
              <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-orange-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Cooking Instructions</h2>
                  <button className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-xl hover:bg-orange-200 transition-colors">
                    <Play className="w-4 h-4" />
                    Video Tutorial
                  </button>
                </div>

                <div className="space-y-6">
                  {recipe.steps.map((step) => (
                    <div
                      key={step.number}
                      className={`border-2 rounded-2xl p-6 transition-all ${
                        completedSteps.includes(step.number)
                          ? 'border-green-300 bg-green-50'
                          : 'border-orange-100 bg-white hover:border-orange-300'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <button
                          onClick={() => toggleStep(step.number)}
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                            completedSteps.includes(step.number)
                              ? 'bg-green-500 text-white'
                              : 'bg-orange-500 text-white'
                          }`}
                        >
                          {completedSteps.includes(step.number) ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : (
                            step.number
                          )}
                        </button>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                            <span className="text-sm text-orange-600 font-semibold flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {step.time}
                            </span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cooking Tips */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <ChefHat className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Pro Tips from the Chef</h2>
              </div>
              <ul className="space-y-4">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Nutrition & Info */}
          <div className="space-y-8">
            {/* Nutrition Facts */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-orange-100 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nutrition Facts</h3>
              <div className="space-y-4">
                {recipe.nutritionFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-orange-50 rounded-xl"
                  >
                    <span className="text-gray-700 font-medium">{fact.label}</span>
                    <span className="text-orange-600 font-bold text-lg">{fact.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t-2 border-orange-100">
                <p className="text-xs text-gray-500 text-center">
                  * Percent Daily Values are based on a 2000 calorie diet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewRecipe;