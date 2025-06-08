import React from 'react';

const MobileNavigation = ({ activeSection, setActiveSection, navItems }) => {
  return (
    <div className="md:hidden bg-white shadow-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;