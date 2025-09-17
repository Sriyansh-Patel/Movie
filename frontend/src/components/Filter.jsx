import React from "react";

export default function Filter({
  selectedCategory,
  onCategoryChange,
  selectedYear,
  onYearChange,
  onApplyFilters,
}) {
  const categories = [
    "All",
    "Comedy",
    "Action",
    "Adventure",
    "Sci-Fi",
    "Horror",
    "Drama",
    "Thriller",
    "Animation",
    "Documentary",
    "Fantasy",
    "Romance",
  ];
  const years = ["All Years", 2025, 2024, 2023, 2022, 2021];

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-4 shadow-md w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold text-white mb-4">Filters</h3>

      {/* Category */}
      <div className="mb-6">
        <label
          htmlFor="category-select"
          className="block text-sm font-medium text-gray-400 mb-2"
        >
          Categories
        </label>
        <div className="relative">
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 transition-colors duration-200 appearance-none pr-10"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Year */}
      <div className="mb-6">
        <label
          htmlFor="year-select"
          className="block text-sm font-medium text-gray-400 mb-2"
        >
          Year
        </label>
        <div className="relative">
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 transition-colors duration-200 appearance-none pr-10"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onApplyFilters}
        className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
      >
        Apply Filters
      </button>
    </div>
  );
}
