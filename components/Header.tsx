import React from 'react';

interface HeaderProps {
  onProfileClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onProfileClick, onContactClick }) => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-gray-800">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white tracking-wider">PORTFOLIO</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onContactClick}
                className="px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-500 transition-colors"
                aria-label="Contactez-moi"
              >
                Contactez-moi
              </button>
              <button 
                onClick={onProfileClick} 
                className="rounded-full h-10 w-10 bg-gray-700 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-yellow-500 transition-transform duration-300 hover:scale-110"
                aria-label="Afficher le profil"
              >
                <img
                  className="h-full w-full object-cover"
                  src="/img/profile/digi-1111.jpg"
                  alt="Profile"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
