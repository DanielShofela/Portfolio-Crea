
import React from 'react';
import type { PortfolioItem } from '../types';
import GalleryItem from './GalleryItem';

interface GalleryProps {
  items: PortfolioItem[];
  onItemSelect: (item: PortfolioItem) => void;
}

const Gallery: React.FC<GalleryProps> = ({ items, onItemSelect }) => {
  if (items.length === 0) {
      return <p className="text-center text-gray-400">No items to display.</p>;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {items.map(item => (
        <GalleryItem key={item.id} item={item} onSelect={onItemSelect} />
      ))}
    </div>
  );
};

export default Gallery;
