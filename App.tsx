import React, { useState, useMemo } from 'react';
import { portfolioData } from './data/portfolioData';
import type { PortfolioItem } from './types';
import { PortfolioItemType } from './types';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import ProfileModal from './components/ProfileModal';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | PortfolioItemType>('all');

  const handleSelectItem = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleOpenProfileModal = () => setIsProfileModalOpen(true);
  const handleCloseProfileModal = () => setIsProfileModalOpen(false);
  
  const handleOpenContactForm = () => setIsContactFormOpen(true);
  const handleCloseContactForm = () => setIsContactFormOpen(false);

  const filteredItems = useMemo(() => {
    if (filter === 'all') {
      return portfolioData;
    }
    return portfolioData.filter(item => item.type === filter);
  }, [filter]);
  
  const FilterButton: React.FC<{
    value: 'all' | PortfolioItemType;
    label: string;
  }> = ({ value, label }) => (
    <button
      onClick={() => setFilter(value)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
        filter === value
          ? 'bg-indigo-600 text-white shadow-lg'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header onProfileClick={handleOpenProfileModal} onContactClick={handleOpenContactForm} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mes travaux créatifs
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Une collection de mes projets récents, y compris des affiches et des productions vidéo.
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12">
          <FilterButton value="all" label="Tous" />
          <FilterButton value={PortfolioItemType.POSTER} label="Affiches" />
          <FilterButton value={PortfolioItemType.VIDEO} label="Vidéos" />
        </div>

        <Gallery items={filteredItems} onItemSelect={handleSelectItem} />
      </main>
      
      <Modal item={selectedItem} onClose={handleCloseModal} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal} />
      <ContactForm isOpen={isContactFormOpen} onClose={handleCloseContactForm} />

      <footer className="text-center py-8 mt-12 border-t border-gray-800">
          <p className="text-gray-500">&copy; 2024 Shofela Daniel. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default App;