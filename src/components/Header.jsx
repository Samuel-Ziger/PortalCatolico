import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = ({ activeSection, setActiveSection, navItems }) => {
  return (
    <header className="bg-white dark:bg-dark-card shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img src="/images/cruz.png" alt="Cruz" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-800 dark:text-dark-text">Portal Católico</span>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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