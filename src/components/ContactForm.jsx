import React, { useState } from 'react';
import { FaPaperPlane, FaUser, FaEnvelope, FaComment, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      // Show success message with animation
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div id="contact" className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      {/* Success Message */}
      {submitted && (
        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl animate-pulse">
          <div className="flex items-center">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <FaCheck className="text-green-600 text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-green-800">Message Sent Successfully!</h3>
              <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Form Header */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-r from-blue-400 to-pink-500 p-3 rounded-full mr-4">
            <FaPaperPlane className="text-white text-xl" />
          </div>
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-500">We're here to support you</p>
          </div>
        </div>
        <p className="text-gray-600">
          Reach out to us for support, questions, or to share your story. 
          Our team is here to help you navigate your cancer journey.
        </p>
      </div>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="flex items-center text-gray-700 font-medium mb-2">
            <FaUser className="mr-2 text-blue-500" />
            Name *
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 pl-10 border ${errors.name ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200`}
              placeholder="Fahim Gazi"
            />
            {formData.name && !errors.name && (
              <FaCheck className="absolute right-3 top-4 text-green-500" />
            )}
          </div>
          {errors.name && (
            <div className="flex items-center mt-2 text-red-600 text-sm">
              <FaExclamationTriangle className="mr-1" />
              {errors.name}
            </div>
          )}
        </div>
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="flex items-center text-gray-700 font-medium mb-2">
            <FaEnvelope className="mr-2 text-pink-500" />
            Email *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 pl-10 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-200`}
              placeholder="fahim@example.com"
            />
            {formData.email && !errors.email && (
              <FaCheck className="absolute right-3 top-4 text-green-500" />
            )}
          </div>
          {errors.email && (
            <div className="flex items-center mt-2 text-red-600 text-sm">
              <FaExclamationTriangle className="mr-1" />
              {errors.email}
            </div>
          )}
        </div>
        
        {/* Message Field */}
        <div>
          <label htmlFor="message" className="flex items-center text-gray-700 font-medium mb-2">
            <FaComment className="mr-2 text-purple-500" />
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className={`w-full px-4 py-3 border ${errors.message ? 'border-red-300' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 resize-none`}
            placeholder="How can we support you today?"
          ></textarea>
          <div className="flex justify-between items-center mt-1">
            {errors.message ? (
              <div className="flex items-center text-red-600 text-sm">
                <FaExclamationTriangle className="mr-1" />
                {errors.message}
              </div>
            ) : (
              <div className="text-gray-400 text-sm">
                {formData.message.length > 0 ? `${formData.message.length} characters` : ''}
              </div>
            )}
            <div className={`text-sm ${formData.message.length < 10 ? 'text-red-500' : 'text-green-500'}`}>
              {formData.message.length > 0 && `${10 - formData.message.length < 0 ? 0 : 10 - formData.message.length} more needed`}
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-blue-500 to-pink-600 hover:from-blue-600 hover:to-pink-700 text-white font-bold py-4 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Sending...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <FaPaperPlane className="mr-2" />
              Send Message
            </div>
          )}
        </button>
      </form>
      
      {/* Additional Info */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-4 rounded-xl">
          <h4 className="font-bold text-gray-700 mb-2">💡 Need Immediate Help?</h4>
          <p className="text-gray-600 text-sm">
            Call our 24/7 support line at <span className="font-bold text-blue-600">1-800-HOPE-NOW </span> 
            or email <span className="font-bold text-pink-600">support@hopecare.org</span>
          </p>
        </div>
        <p className="text-gray-500 text-xs mt-4 text-center">
          We respect your privacy. Your information will only be used to provide support.
        </p>
      </div>
    </div>
  );
};
