import React from "react";

export default function Criterion({ criterion, onCriterionChange, searchQuery, onSearchChange }) {
  const criteria = ["Most Popular", "Newest First", "Alphabetical"];

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-4 shadow-md w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold text-white mb-4">Sort & Search</h3>

      {/* 🔍 Search Bar */}
      <div className="mb-6">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-400 mb-2"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search videos..."
            className="block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 pr-10 transition-colors duration-200"
          />
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 📊 Sorting Options */}
      <div>
        <h4 className="text-sm font-medium text-gray-400 mb-2">
          Sorting Criterion
        </h4>
        <ul className="space-y-2">
          {criteria.map((item) => (
            <li key={item}>
              <button
                className={`w-full text-left p-2 rounded-lg transition-colors duration-200 ${
                  criterion === item
                    ? "bg-indigo-600 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => onCriterionChange(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}