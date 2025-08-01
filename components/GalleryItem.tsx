
import React from 'react';
import type { PortfolioItem } from '../types';
import { PortfolioItemType } from '../types';
import PlayIcon from './icons/PlayIcon';

interface GalleryItemProps {
  item: PortfolioItem;
  onSelect: (item: PortfolioItem) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, onSelect }) => {
  return (
    <div
      className="group relative aspect-w-3 aspect-h-2 bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-2"
      onClick={() => onSelect(item)}
    >
      <img src={item.thumbnailUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300"></div>
      
      {item.type === PortfolioItemType.VIDEO && (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full p-4 transform transition-transform duration-300 group-hover:scale-110">
                <PlayIcon className="w-10 h-10 text-white" />
            </div>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-white text-lg font-bold truncate transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">{item.title}</h3>
        <p className="text-gray-300 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
