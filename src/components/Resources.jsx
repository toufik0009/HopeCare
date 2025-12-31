import React from "react";

export default function Resources() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center text-hope-blue mb-10">
        Resources & Support
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-hope-pink text-4xl mb-4">💖</div>
          <h3 className="text-xl font-bold text-hope-blue mb-3">
            Emotional Support
          </h3>
          <p className="text-gray-700">
            Connect with support groups, counselors, and peers who understand
            what you're going through.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-hope-pink text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold text-hope-blue mb-3">
            Educational Resources
          </h3>
          <p className="text-gray-700">
            Access reliable information about cancer types, treatments, and
            coping strategies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-hope-pink text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-bold text-hope-blue mb-3">
            Community Events
          </h3>
          <p className="text-gray-700">
            Join awareness campaigns, fundraising events, and community
            gatherings.
          </p>
        </div>
      </div>
    </div>
  );
}
