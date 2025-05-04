
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Main header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/orange-logo.svg" 
              alt="Orange Tunisie" 
              className="h-10 w-auto" 
            />
          </Link>
          
          {/* Navigation - visible on desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="#" className="text-white hover:text-orange-400 font-medium">
              Offres mobiles
            </Link>
            <Link to="#" className="text-white hover:text-orange-400 font-medium">
              Offres Internet
            </Link>
            <Link to="#" className="text-white hover:text-orange-400 font-medium">
              Smartphones et accessoires
            </Link>
            <Link to="#" className="text-white hover:text-orange-400 font-medium">
              Bons plans
            </Link>
            <Link to="/network-sites" className="text-white hover:text-orange-400 font-medium">
              Network Guardian
            </Link>
          </nav>
        </div>
        
        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
