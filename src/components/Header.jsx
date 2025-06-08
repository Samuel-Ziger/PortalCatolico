import React from 'react';
import { Cross } from 'lucide-react';

const Header = ({ activeSection, setActiveSection, navItems }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Cross className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Portal Católico</h1>
          </div>
          <nav className="hidden md:flex flex-wrap space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`hover:text-blue-200 transition-colors py-1 ${
                  activeSection === item.id ? 'text-blue-200 font-semibold border-b-2 border-blue-200' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;