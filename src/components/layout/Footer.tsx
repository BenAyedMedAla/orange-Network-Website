
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-10 pb-4">
      {/* Social media section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-6 flex flex-col md:flex-row justify-between items-center border-b border-gray-800">
        <div className="mb-4 md:mb-0">
          <span className="text-sm font-medium">Nous suivre</span>
          <div className="flex space-x-3 mt-3">
            <Link to="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link to="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link to="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link to="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link>
            <Link to="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Links section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-medium mb-4">Offres et services</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Mobile prépayé</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Mobile postpayé</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Fixbox</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Flybox postpayée</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Flybox prépayée</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Darbox Plus</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Airbox</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-4">Appareils</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Tous les mobiles</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Tous les accessoires</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-4">Réseaux</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Couverture mobile</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Couverture Fixbox</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Orange fidélité</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Assistance</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Orange place</Link></li>
            <li><Link to="#" className="text-sm text-gray-400 hover:text-white">Services pratiques</Link></li>
            <li><Link to="/network-sites" className="text-sm text-gray-400 hover:text-white">Network Guardian</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-6 border-t border-gray-800 flex flex-wrap gap-4 justify-center md:justify-start text-xs text-gray-400">
        <span>© Orange {currentYear}</span>
        <Link to="#" className="hover:text-white">Informations légales</Link>
        <Link to="#" className="hover:text-white">Conditions générales</Link>
        <Link to="#" className="hover:text-white">Fondation Orange</Link>
        <Link to="#" className="hover:text-white">Carrières</Link>
        <Link to="#" className="hover:text-white">Actualités</Link>
        <Link to="#" className="hover:text-white">Orange Developer Center</Link>
      </div>
    </footer>
  );
};

export default Footer;
