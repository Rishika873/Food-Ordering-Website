import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, MapPin, Heart, ShoppingCart, Search, Filter, Flame, Award, Leaf, ChevronDown } from 'lucide-react';
import Navbar from './Navbar';
export default function ExploreRestaurantPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // Restaurant Info
  const restaurant = {
    name: "Spice Garden Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    rating: 4.5,
    reviews: 1247,
    address: "123 Food Street, Downtown, Mumbai",
    deliveryTime: "30-40 mins",
    cuisines: ["Indian", "Chinese", "Continental"],
    features: ["Fast Delivery", "Pure Veg", "Chef's Special"]
  };

  // Menu Categories
  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'starters', name: 'Starters', icon: '🥗' },
    { id: 'mains', name: 'Main Course', icon: '🍛' },
    { id: 'breads', name: 'Breads', icon: '🫓' },
    { id: 'desserts', name: 'Desserts', icon: '🍨' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' }
  ];

  // Menu Items
  const menuItems = [
    {
      id: 1,
      name: "Paneer Tikka Masala",
      category: "mains",
      description: "Succulent cottage cheese cubes in rich tomato-based creamy gravy with aromatic spices",
      price: 299,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      rating: 4.8,
      isVeg: true,
      isSpicy: true,
      isBestseller: true,
      preparationTime: "15-20 mins"
    },
    {
      id: 2,
      name: "Butter Chicken",
      category: "mains",
      description: "Tender chicken pieces simmered in velvety butter and tomato gravy with Indian spices",
      price: 349,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      rating: 4.9,
      isVeg: false,
      isSpicy: true,
      isBestseller: true,
      preparationTime: "20-25 mins"
    },
    {
      id: 3,
      name: "Crispy Spring Rolls",
      category: "starters",
      description: "Golden fried rolls stuffed with mixed vegetables and served with sweet chili sauce",
      price: 179,
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400",
      rating: 4.6,
      isVeg: true,
      isSpicy: false,
      isBestseller: false,
      preparationTime: "10-15 mins"
    },
    {
      id: 4,
      name: "Garlic Naan",
      category: "breads",
      description: "Soft, fluffy bread brushed with butter and topped with fresh garlic and coriander",
      price: 59,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      rating: 4.7,
      isVeg: true,
      isSpicy: false,
      isBestseller: true,
      preparationTime: "5-10 mins"
    },
    {
      id: 5,
      name: "Gulab Jamun",
      category: "desserts",
      description: "Soft, spongy milk dumplings soaked in aromatic sugar syrup with cardamom",
      price: 89,
      image: "https://images.unsplash.com/photo-1589217157232-464b505b197f?w=400",
      rating: 4.8,
      isVeg: true,
      isSpicy: false,
      isBestseller: true,
      preparationTime: "5 mins"
    },
    {
      id: 6,
      name: "Mango Lassi",
      category: "beverages",
      description: "Refreshing yogurt-based drink blended with fresh mangoes and a hint of cardamom",
      price: 99,
      image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400",
      rating: 4.7,
      isVeg: true,
      isSpicy: false,
      isBestseller: false,
      preparationTime: "5 mins"
    },
    {
      id: 7,
      name: "Chicken Biryani",
      category: "mains",
      description: "Fragrant basmati rice layered with marinated chicken, aromatic spices and saffron",
      price: 399,
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
      rating: 4.9,
      isVeg: false,
      isSpicy: true,
      isBestseller: true,
      preparationTime: "25-30 mins"
    },
    {
      id: 8,
      name: "Tandoori Platter",
      category: "starters",
      description: "Assorted grilled delicacies from tandoor including paneer tikka, kebabs and chicken",
      price: 449,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      rating: 4.8,
      isVeg: false,
      isSpicy: true,
      isBestseller: true,
      preparationTime: "20-25 mins"
    }
  ];

  // Filter items
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (itemId) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const addToCart = (item) => {
    setCart(prev => [...prev, item]);
    // Show toast notification here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Restaurant Info */}
      <Navbar/>
      <div className="bg-white shadow-lg ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-15">
            
          {/* <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-4 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Restaurants</span>
          </button> */}

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Restaurant Image */}
            <img 
              src={restaurant.image} 
              alt={restaurant.name}
              className="w-full md:w-32 h-32 object-cover rounded-2xl shadow-lg"
            />

            {/* Restaurant Details */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">{restaurant.name}</h1>
                  <p className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    {restaurant.address}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-3">
                <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-green-600 fill-current" />
                  <span className="font-bold text-green-700">{restaurant.rating}</span>
                  <span className="text-xs text-green-600">({restaurant.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 bg-orange-100 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-700">{restaurant.deliveryTime}</span>
                </div>
                {restaurant.features.map((feature, idx) => (
                  <span key={idx} className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Cuisines:</span>
                {restaurant.cuisines.map((cuisine, idx) => (
                  <span key={idx} className="text-sm font-medium text-orange-600">
                    {cuisine}{idx < restaurant.cuisines.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Cart Badge */}
            <div className="relative">
              {/* <button className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl">
                <ShoppingCart className="w-6 h-6" />
              </button> */}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl  mx-auto px-4 sm:px-6 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-2 border-orange-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Filter Button */}
            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide">
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

        {/* Menu Items Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Items' : categories.find(c => c.id === selectedCategory)?.name}
              <span className="text-orange-500 ml-2">({filteredItems.length})</span>
            </h2>
            <button className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
              <span className="text-sm font-medium">Sort by</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-orange-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {item.isBestseller && (
                      <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                        <Award className="w-3 h-3" />
                        Bestseller
                      </span>
                    )}
                    {item.isVeg && (
                      <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Leaf className="w-3 h-3" />
                        Pure Veg
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(item.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-600'
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h3>
                    {item.isSpicy && (
                      <Flame className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 text-green-600 fill-current" />
                      <span className="text-sm font-bold text-green-700">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs">{item.preparationTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                    </div>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-16 h-16 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
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