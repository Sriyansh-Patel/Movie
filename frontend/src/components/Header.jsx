import React, { useState } from "react";
import useAuth from "../context/useAuth.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Upload", path: "/upload" },
  ];

  const navLinkClasses = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-indigo-400" : "text-gray-300 hover:text-white"
    }`;

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    // TODO: integrate real auth logout
    logout();
    navigate("/");
  };

  const AuthButtons = ({ mobile = false }) =>
    user ? (
      <div className={mobile ? "flex flex-col space-y-2" : "relative"}>
        {/* Avatar Dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-2 focus:outline-none">
            <img
              src={user.avatar || "https://via.placeholder.com/32"}
              alt="avatar"
              className="w-8 h-8 rounded-full border border-gray-600"
            />
            {!mobile && (
              <span className="text-gray-300 font-medium">{user.name}</span>
            )}
          </button>

          {/* Dropdown (desktop only) */}
          {!mobile && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleNavigate("/profile")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu options */}
        {mobile && (
          <>
            <button
              onClick={() => handleNavigate("/profile")}
              className="w-full py-2 px-3 rounded-md bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors"
            >
              Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
            >
              Logout
            </button>
          </>
        )}
      </div>
    ) : (
      <div className={mobile ? "flex flex-col space-y-2" : "flex items-center space-x-2"}>
        <button
          onClick={() => handleNavigate("/login")}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            mobile
              ? "w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => handleNavigate("/signup")}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            mobile
              ? "w-full bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-gray-700 hover:bg-gray-600 text-white"
          }`}
        >
          Sign Up
        </button>
      </div>
    );

  return (
    <header className="bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-indigo-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.5 9a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zM10.5 9a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zM6.5 9a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5z" />
            </svg>
            <span className="text-white text-2xl font-bold">TubeClone</span>
          </Link>

          {/* Search (desktop only) */}
          <div className="flex-1 max-w-lg mx-4 hidden sm:block">
            <input
              type="text"
              placeholder="Search for videos..."
              className="w-full p-2 rounded-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Desktop nav + actions */}
          <div className="hidden sm:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={navLinkClasses}>
                {link.name}
              </NavLink>
            ))}
            <AuthButtons />
          </div>

          {/* Mobile menu toggle */}
          <div className="sm:hidden">
            <button
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="sm:hidden bg-gray-800">
          <div className="px-4 py-3 border-t border-gray-700">
            <input
              type="text"
              placeholder="Search for videos..."
              className="w-full mb-4 p-2 rounded-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-md font-medium transition-colors ${
                      isActive
                        ? "text-indigo-400 bg-gray-700"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <AuthButtons mobile />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
