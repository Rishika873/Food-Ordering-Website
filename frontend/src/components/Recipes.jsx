import React, { useState } from 'react';
import { Search, Clock, Users, ChefHat, Heart, Flame, Leaf, Star, Filter, ArrowLeft, Play, BookOpen } from 'lucide-react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Recipes', icon: '🍽️' },
    { id: 'breakfast', name: 'Breakfast', icon: '🥞' },
    { id: 'lunch', name: 'Lunch', icon: '🍱' },
    { id: 'dinner', name: 'Dinner', icon: '🍛' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Drinks', icon: '🍹' },
    { id: 'snacks', name: 'Snacks', icon: '🍿' }
  ];

  const recipes = [
    {
      id: 1,
      name: "Classic Butter Chicken",
      category: "dinner",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
      prepTime: "20 mins",
      cookTime: "40 mins",
      servings: 4,
      difficulty: "medium",
      rating: 4.9,
      reviews: 342,
      description: "Tender chicken pieces cooked in a rich, creamy tomato-based gravy with aromatic spices",
      isVeg: false,
      isSpicy: true,
      calories: 450,
      ingredients: [
        "500g chicken breast",
        "2 cups tomato puree",
        "1 cup heavy cream",
        "2 tbsp butter",
        "1 tbsp garam masala",
        "1 tsp red chili powder",
        "Fresh coriander for garnish"
      ],
      steps: [
        "Marinate chicken with yogurt and spices for 30 minutes",
        "Grill or pan-fry the marinated chicken until cooked",
        "In a pan, melt butter and add tomato puree",
        "Add spices and cook for 10 minutes",
        "Add cream and simmer for 5 minutes",
        "Add chicken pieces and cook for another 5 minutes",
        "Garnish with fresh coriander and serve hot"
      ]
    },
    {
      id: 2,
      name: "Avocado Toast Supreme",
      category: "breakfast",
      image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500",
      prepTime: "10 mins",
      cookTime: "5 mins",
      servings: 2,
      difficulty: "easy",
      rating: 4.7,
      reviews: 189,
      description: "Perfectly toasted bread topped with creamy avocado, poached egg, and fresh herbs",
      isVeg: true,
      isSpicy: false,
      calories: 320,
      ingredients: [
        "2 slices sourdough bread",
        "1 ripe avocado",
        "2 eggs",
        "Cherry tomatoes",
        "Feta cheese",
        "Olive oil",
        "Salt and pepper"
      ],
      steps: [
        "Toast the sourdough bread until golden",
        "Mash avocado with salt, pepper, and lemon juice",
        "Poach eggs in simmering water for 3-4 minutes",
        "Spread avocado on toast",
        "Top with poached egg",
        "Add cherry tomatoes and feta",
        "Drizzle with olive oil and season"
      ]
    },
    {
      id: 3,
      name: "Spicy Thai Green Curry",
      category: "dinner",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500",
      prepTime: "15 mins",
      cookTime: "25 mins",
      servings: 4,
      difficulty: "medium",
      rating: 4.8,
      reviews: 256,
      description: "Aromatic green curry with vegetables in creamy coconut milk",
      isVeg: true,
      isSpicy: true,
      calories: 380,
      ingredients: [
        "3 tbsp green curry paste",
        "400ml coconut milk",
        "Mixed vegetables",
        "Thai basil",
        "Fish sauce",
        "Palm sugar",
        "Jasmine rice"
      ],
      steps: [
        "Heat oil and fry curry paste for 2 minutes",
        "Add coconut milk and bring to simmer",
        "Add vegetables and cook until tender",
        "Season with fish sauce and palm sugar",
        "Add Thai basil leaves",
        "Simmer for 5 more minutes",
        "Serve with jasmine rice"
      ]
    },
    {
      id: 4,
      name: "Classic Tiramisu",
      category: "desserts",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
      prepTime: "30 mins",
      cookTime: "0 mins",
      servings: 8,
      difficulty: "medium",
      rating: 4.9,
      reviews: 412,
      description: "Layers of coffee-soaked ladyfingers and creamy mascarpone cheese",
      isVeg: true,
      isSpicy: false,
      calories: 420,
      ingredients: [
        "500g mascarpone cheese",
        "6 egg yolks",
        "200ml strong coffee",
        "Ladyfinger biscuits",
        "Cocoa powder",
        "Sugar",
        "Coffee liqueur"
      ],
      steps: [
        "Beat egg yolks with sugar until thick",
        "Fold in mascarpone cheese gently",
        "Brew strong coffee and let cool",
        "Dip ladyfingers in coffee mixture",
        "Layer biscuits and cream in dish",
        "Repeat layers",
        "Dust with cocoa and refrigerate 4 hours"
      ]
    },
    {
      id: 5,
      name: "Mango Smoothie Bowl",
      category: "breakfast",
      image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500",
      prepTime: "10 mins",
      cookTime: "0 mins",
      servings: 2,
      difficulty: "easy",
      rating: 4.6,
      reviews: 178,
      description: "Refreshing mango smoothie topped with fresh fruits and granola",
      isVeg: true,
      isSpicy: false,
      calories: 280,
      ingredients: [
        "2 ripe mangoes",
        "1 banana",
        "Greek yogurt",
        "Honey",
        "Fresh berries",
        "Granola",
        "Chia seeds"
      ],
      steps: [
        "Blend mangoes, banana, and yogurt until smooth",
        "Add honey to taste",
        "Pour into bowls",
        "Top with fresh berries",
        "Add granola and chia seeds",
        "Drizzle with extra honey",
        "Serve immediately"
      ]
    },
    {
      id: 6,
      name: "Crispy Vegetable Spring Rolls",
      category: "snacks",
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500",
      prepTime: "25 mins",
      cookTime: "15 mins",
      servings: 6,
      difficulty: "medium",
      rating: 4.7,
      reviews: 223,
      description: "Golden crispy spring rolls filled with fresh vegetables",
      isVeg: true,
      isSpicy: false,
      calories: 180,
      ingredients: [
        "Spring roll wrappers",
        "Cabbage",
        "Carrots",
        "Bean sprouts",
        "Soy sauce",
        "Ginger",
        "Oil for frying"
      ],
      steps: [
        "Shred vegetables finely",
        "Stir-fry vegetables with seasonings",
        "Let filling cool completely",
        "Place filling on wrapper",
        "Roll tightly and seal edges",
        "Deep fry until golden brown",
        "Serve with sweet chili sauce"
      ]
    }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const toggleFavorite = (recipeId) => {
    setFavorites(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      {/* Header */}
      <div className="bg-white shadow-sm">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <ChefHat className="w-8 h-8 text-orange-500" />
              <h1 className="text-4xl font-bold text-gray-900">Delicious Recipes</h1>
            </div>
            <p className="text-gray-600 text-lg">Discover and cook amazing dishes from around the world</p>
          </div>
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search and Filter Section */}
        <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-3xl shadow-xl p-6 mb-8 border-2 border-orange-100">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-6 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors bg-white"
            >
              <option value="all">All Levels</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg">
              <Filter className="w-5 h-5" />
              More Filters
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory === 'all' ? 'All Recipes' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-orange-500 ml-2">({filteredRecipes.length})</span>
          </h2>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <div
              key={recipe.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-orange-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlays */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
                  </span>
                  {recipe.isVeg && (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      Veg
                    </span>
                  )}
                  {recipe.isSpicy && (
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      Spicy
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(recipe.id)}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.includes(recipe.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Calories Badge */}
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {recipe.calories} cal
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {recipe.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {recipe.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-lg">
                    <Star className="w-4 h-4 text-green-600 fill-current" />
                    <span className="text-sm font-bold text-green-700">{recipe.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({recipe.reviews} reviews)</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg 
                  flex items-center justify-center gap-2 cursor-pointer" onClick={() => navigate('/viewrecipes')}>
                    <BookOpen className="w-4 h-4" />
                    View Recipe
                  </button>
                  {/* <button className="bg-orange-100 text-orange-600 p-3 rounded-xl hover:bg-orange-200 transition-all">
                    <Play className="w-5 h-5" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-16 h-16 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default Recipes;