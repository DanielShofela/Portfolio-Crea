import React, { useEffect } from 'react';
import CloseIcon from './icons/CloseIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-modal-title"
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 bg-gray-900 flex justify-between items-center border-b border-gray-700 sticky top-0">
            <h2 id="profile-modal-title" className="text-xl font-bold text-white">Profil Professionnel</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Fermer le profil">
                <CloseIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="flex-grow overflow-y-auto p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                <img src="/img/profile/digi-1111.jpg" alt="Logo Elijah Baptist Church" className="w-28 h-28 sm:w-32 sm:h-32 border-4 border-yellow-500 shadow-lg flex-shrink-0 object-contain bg-white p-2"/>
                <div className="text-center sm:text-left">
                    <h2 className="text-3xl font-bold text-white">Shofela Daniel</h2>
                    <div className="flex justify-center sm:justify-start items-center gap-4 mt-3">
                        <a href="https://ci.linkedin.com/in/shofela-daniel?trk=public_post_follow-view-profile&original_referer=" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn de Shofela Daniel" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110">
                            <LinkedInIcon className="w-8 h-8" />
                        </a>
                        <a href="https://github.com/DanielShofela" target="_blank" rel="noopener noreferrer" aria-label="Profil GitHub de Shofela Daniel" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110">
                            <GitHubIcon className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-3 border-b-2 border-indigo-500/30 pb-2">🎯 Profil professionnel</h3>
                    <p className="text-gray-300 leading-relaxed mt-4">
                       Jeune professionnel dynamique, passionné par le digital, avec une solide formation en Big Data, Cloud et IoT. Mon parcours m’a permis de développer une expérience concrète en communication numérique, gestion de communautés en ligne et marketing digital, ainsi que des compétences transversales allant de la création de contenu à l’analyse de performance, en passant par la gestion de projet digital et l’animation de communautés.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-3 border-b-2 border-indigo-500/30 pb-2">✅ Compétences clés</h3>
                    <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300 columns-1 sm:columns-2">
                        <li>Stratégies digitales (SEO/SEA)</li>
                        <li>Animation de communauté</li>
                        <li>Création de contenu visuel</li>
                        <li>Veille et reporting</li>
                        <li>Canva, Meta Business Suite</li>
                        <li>Buffer, Excel, Power BI</li>
                        <li>WordPress</li>
                        <li>HTML, PHP, Python</li>
                        <li>MySQL & Web Scraping</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-3 border-b-2 border-indigo-500/30 pb-2">🧩 Atouts personnels</h3>
                    <ul className="list-disc list-inside space-y-2 mt-4 text-gray-300">
                        <li>Créatif, autonome et orienté résultat</li>
                        <li>Excellent relationnel et sens de l’écoute</li>
                        <li>Capacité à fédérer et dynamiser une communauté</li>
                        <li>Expérience en milieux associatifs et entrepreneuriaux</li>
                    </ul>
                </div>
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

export default ProfileModal;