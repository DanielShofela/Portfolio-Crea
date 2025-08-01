
import React, { useEffect } from 'react';
import type { PortfolioItem } from '../types';
import { PortfolioItemType } from '../types';
import CloseIcon from './icons/CloseIcon';

interface ModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-full overflow-hidden flex flex-col relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 bg-gray-800 flex justify-between items-center border-b border-gray-700">
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto">
          <div className="aspect-w-16 aspect-h-9 bg-black">
            {item.type === PortfolioItemType.POSTER ? (
              <img src={item.contentUrl} alt={item.title} className="w-full h-full object-contain" />
            ) : (
              <iframe
                src={item.contentUrl}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            )}
          </div>
          <div className="p-6">
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Modal;
