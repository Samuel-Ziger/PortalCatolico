import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ activeSection, setActiveSection, navItems }) => {
  return (
    <header className="bg-white dark:bg-dark-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="/images/cruz.png" alt="Cruz" className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="text-lg sm:text-xl font-bold text-gray-800 dark:text-dark-text">Portal Católico</span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <nav className="hidden md:flex space-x-1 sm:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;