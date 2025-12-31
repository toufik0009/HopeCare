import React, { useState } from 'react';
import { 
  FaHeart, 
  FaCreditCard, 
  FaPaypal, 
  FaBitcoin,  
  FaGift,
  FaHandHoldingHeart,
  FaArrowRight,
  FaCheckCircle,
  FaLock
} from 'react-icons/fa';

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationType, setDonationType] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const donationOptions = [25, 50, 100, 250, 500];
  const paymentMethods = [
    { id: 'card', name: 'Credit Card', icon: <FaCreditCard />, color: 'from-blue-500 to-blue-600' },
    { id: 'paypal', name: 'PayPal', icon: <FaPaypal />, color: 'from-blue-400 to-blue-500' },
    { id: 'crypto', name: 'Crypto', icon: <FaBitcoin />, color: 'from-yellow-500 to-orange-500' }
  ];

  const impactMetrics = [
    { amount: 25, impact: 'Provides emotional support resources for 1 patient' },
    { amount: 50, impact: 'Funds 2 hours of counseling support' },
    { amount: 100, impact: 'Sponsors a care package for a patient in treatment' },
    { amount: 250, impact: 'Supports a month of 24/7 hotline services' },
  ];

  return (
    <section id="donate" className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-pink-500 to-red-500 p-4 rounded-full animate-pulse">
              <FaHeart className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Make a Difference Today
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Your donation provides critical support to cancer patients, funds research, 
            and helps build a community of hope for those who need it most.
          </p>
          <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3 rounded-full border border-green-200">
            <FaHandHoldingHeart className="text-green-500 mr-2" />
            <span className="font-bold text-green-700">Every dollar makes an impact</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Donation Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Make Your Donation</h2>
                <div className="flex items-center text-green-600">
                  <FaLock className="mr-2" />
                  <span className="text-sm font-medium">Secure & Encrypted</span>
                </div>
              </div>

              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Donation Type</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['one-time', 'monthly'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setDonationType(type)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        donationType === type
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <div className="font-bold text-gray-800 capitalize">{type} Donation</div>
                          <div className="text-sm text-gray-600">
                            {type === 'one-time' ? 'Single contribution' : 'Recurring monthly'}
                          </div>
                        </div>
                        {donationType === type && (
                          <FaCheckCircle className="text-pink-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Donation Amount */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Select Amount</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                  {donationOptions.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setDonationAmount(amount)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        donationAmount === amount
                          ? 'border-blue-500 bg-blue-50 text-blue-600'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-lg font-bold">₹{amount}</div>
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                      min="1"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Payment Method</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        paymentMethod === method.id
                          ? `border-blue-500 bg-gradient-to-r ${method.color} bg-opacity-10`
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`p-2 rounded-lg mr-3 bg-gradient-to-r ${method.color} text-white`}>
                          {method.icon}
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-gray-800">{method.name}</div>
                        </div>
                        {paymentMethod === method.id && (
                          <FaCheckCircle className="ml-auto text-blue-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Donate Button */}
              <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <div className="flex items-center justify-center">
                  <FaHeart className="mr-3 animate-pulse" />
                  Donate ₹{donationAmount} Now
                  <FaArrowRight className="ml-3" />
                </div>
                <div className="text-sm font-normal mt-1 opacity-90">
                  {donationType === 'monthly' ? 'Monthly recurring donation' : 'One-time contribution'}
                </div>
              </button>

              <div className="mt-6 text-center text-gray-500 text-sm">
                <p>All donations are tax-deductible. HopeCare is a 501(c)(3) nonprofit organization.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Impact & Info */}
          <div className="space-y-8">
            {/* Impact Preview */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <FaGift className="mr-2" />
                Your Impact
              </h3>
              <div className="space-y-4">
                {impactMetrics.map((metric, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg backdrop-blur-sm bg-white/10 ${
                      donationAmount >= metric.amount ? 'border-2 border-white/30' : 'opacity-70'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold">₹{metric.amount}</span>
                      {donationAmount >= metric.amount && (
                        <FaCheckCircle className="text-green-300" />
                      )}
                    </div>
                    <p className="text-sm text-blue-100">{metric.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-700 mb-4">Your Donation is Secure</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl mb-1">🔒</div>
                  <div className="text-xs text-gray-600">256-bit SSL</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl mb-1">💳</div>
                  <div className="text-xs text-gray-600">PCI Compliant</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl mb-1">📈</div>
                  <div className="text-xs text-gray-600">Financial Reports</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <div className="text-2xl mb-1">⭐</div>
                  <div className="text-xs text-gray-600">4.9/5 Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">How Your Donation Helps</h3>
              <ul className="space-y-3">
                {[
                  'Provides free counseling services',
                  'Funds patient support programs',
                  'Supports cancer research initiatives',
                  'Maintains 24/7 support hotline',
                  'Creates educational resources',
                  'Organizes community support events'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Other Ways to Support</h3>
              <div className="space-y-4">
                {[
                  { title: 'Corporate Matching', desc: 'Double your impact with employer matching' },
                  { title: 'In-Kind Donations', desc: 'Donate goods or services to support our work' },
                  { title: 'Fundraise for Us', desc: 'Start a fundraiser in your community' },
                  { title: 'Legacy Giving', desc: 'Include HopeCare in your will or estate plans' }
                ].map((way, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-gray-200">
                    <div className="font-medium text-gray-800">{way.title}</div>
                    <div className="text-sm text-gray-600">{way.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}