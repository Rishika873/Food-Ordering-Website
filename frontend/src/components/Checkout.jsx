import React, { useState } from 'react';
import { CreditCard, Wallet, Banknote, X, Check, ArrowRight, Shield, Clock, Package, ChevronRight, Sparkles } from 'lucide-react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

export default function CheckoutPage() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const [isProcessing, setIsProcessing] = useState(false);

  const cartItems = useSelector((state) => state.cart.items); 

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Instant payment with 100% security', badges: ['Visa', 'Mastercard', 'RuPay'], popular: true, offer: '2% cashback' },
    { id: 'upi', name: 'UPI Payment', icon: Wallet, description: 'Quick & seamless UPI transfer', badges: ['GPay', 'PhonePe', 'Paytm'], popular: true, offer: 'Instant' },
    { id: 'cod', name: 'Cash on Delivery', icon: Banknote, description: 'Pay when you receive your order', badges: ['No extra charges'], popular: false }
  ];

  const deliveryFeatures = [
    { icon: Clock, text: 'Delivery in 30-40 mins', color: 'text-green-600' },
    { icon: Shield, text: 'Safe & Secure Payment', color: 'text-blue-600' },
    { icon: Package, text: 'Contactless Delivery', color: 'text-purple-600' }
  ];

  const handlePlaceOrder = () => setShowPaymentModal(true);
  const handleConfirmPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowPaymentModal(false);
      const successDiv = document.createElement('div');
      successDiv.innerHTML = `
        <div class="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none">
          <div class="bg-green-500 text-white px-8 py-4 rounded-2xl shadow-2xl animate-bounce flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-lg font-bold">Order Placed Successfully! 🎉</span>
          </div>
        </div>
      `;
      document.body.appendChild(successDiv);
      setTimeout(() => successDiv.remove(), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Column - Delivery Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500 animate-pulse" /> Why Choose Us?
              </h3>
              <div className="space-y-3">
                {deliveryFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-orange-50 transition-colors">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items Preview */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" /> Your Order
              </h3>
              <div className="space-y-2">
             {cartItems.map((item, idx) => (
  <div key={idx} className="flex items-center gap-3 bg-white/30 backdrop-blur-sm rounded-lg p-3">
    {/* Use img tag for actual images */}
    <img 
  src={item.image} 
  alt={item.name} 
  className="w-16 h-16 object-cover rounded-xl"
/>

    <div className="flex-1">
      <p className="font-semibold text-sm">{item.name}</p>
      <p className="text-xs text-orange-100">Qty: {item.quantity}</p>
    </div>
  </div>
))}

              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-orange-100 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  Order Summary
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </h2>
              </div>
<div className="space-y-4 mb-6 max-h-72 overflow-y-auto pr-2 scrollbar-hide">
  {cartItems.map((item, index) => (
    <div
      key={index}
      className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-gray-50 to-orange-50 border border-orange-100 hover:shadow-md transition-all group"
    >
      <div className="flex items-center gap-4 flex-1">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover rounded-xl group-hover:scale-110 transition-transform"
        />
        <div>
          <p className="font-bold text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <span className="font-medium">Qty:</span>
            <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-bold">
              {item.quantity}
            </span>
          </p>
        </div>
      </div>
      <p className="font-bold text-xl text-orange-600">₹{(item.price * item.quantity).toFixed(2)}</p>
    </div>
  ))}
</div>



              <div className="space-y-4 mb-4 p-4 bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl border border-orange-100">
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="font-medium">Taxes & Fees</span>
                  <span className="font-semibold">₹0.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-700">Delivery Fee</span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-sm">₹49</span>
                    <span className="text-green-600 font-bold text-lg">FREE</span>
                  </div>
                </div>
                <div className="border-t-2 border-orange-300 pt-4 flex justify-between items-center">
                  <span className="font-bold text-gray-900 text-xl">Total Amount</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    ₹{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

<div className="flex justify-center">
  <button
    onClick={handlePlaceOrder}
    className="w-64 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-[length:200%_200%] bg-left hover:bg-right text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 cursor-pointer"
  >
    <span>Proceed to Payment</span>
    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
  </button>
</div>


              <p className="text-center text-sm text-gray-500 mt-4">
                By placing your order, you agree to our terms
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[95vh] overflow-hidden border-4 border-orange-200">
            <div className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 p-8 text-white">
              <div className="relative flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
                    Choose Payment <Sparkles className="w-6 h-6 animate-pulse" />
                  </h3>
                  <p className="text-orange-100 text-sm">Select your preferred payment method</p>
                </div>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="p-2.5 hover:bg-white/20 rounded-full transition-all hover:rotate-90 duration-300"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(95vh-300px)]">
              {/* Payment Methods */}
              <div className="p-6 space-y-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  const isSelected = selectedPayment === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg scale-105'
                          : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/50 hover:shadow-md'
                      }`}
                    >
                      {method.popular && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Popular
                          </span>
                        </div>
                      )}

                      <div className="flex items-start gap-4">
                        <div className={`p-4 rounded-xl ${isSelected ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg scale-110' : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100'}`}>
                          <Icon className="w-7 h-7" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold text-lg text-gray-900">{method.name}</h4>
                            {isSelected && (
                              <div className="bg-orange-500 rounded-full p-1.5 scale-100 transition-transform">
                                <Check className="w-5 h-5 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                          {method.offer && (
                            <div className="mb-3">
                              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                                🎁 {method.offer}
                              </span>
                            </div>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {method.badges.map((badge, idx) => (
                              <span key={idx} className={`text-xs px-3 py-1.5 rounded-full font-medium ${isSelected ? 'bg-orange-200 text-orange-800' : 'bg-gray-200 text-gray-700'}`}>
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>

                        <ChevronRight className={`w-6 h-6 transition-all ${isSelected ? 'text-orange-600 translate-x-1' : 'text-gray-400'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Order Total Summary */}
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 rounded-2xl p-5 border-2 border-orange-200 shadow-inner">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                      <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                        ₹{totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">You saved</p>
                      <span className="text-lg font-bold text-green-600">₹49</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="sticky bottom-0 bg-white p-6 border-t-2 border-gray-100 shadow-2xl">
              <button
                onClick={handleConfirmPayment}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-[length:200%_200%] bg-left hover:bg-right text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isProcessing ? (
                  <>
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing Payment...</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-6 h-6" />
                    <span>Confirm & Place Order</span>
                    <Check className="w-6 h-6 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                <Shield className="w-4 h-4 text-green-600" />
                <span>256-bit SSL encryption • Your data is 100% secure</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
