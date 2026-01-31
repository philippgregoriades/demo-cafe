import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wine } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#722F37]/10"
        data-testid="navbar"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
              data-testid="navbar-logo"
            >
              <Wine className="w-6 h-6 text-[#722F37] group-hover:scale-110 transition-transform" />
              <span className="font-serif text-xl sm:text-2xl font-medium text-[#2D2A26] tracking-wide">
                Dionysos
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-link text-sm uppercase tracking-widest ${
                    isActive(item.path) ? 'active' : ''
                  }`}
                  data-testid={`nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#2D2A26] hover:text-[#722F37] transition-colors"
              aria-label="Toggle menu"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="mobile-menu animate-fade-in"
          data-testid="mobile-menu"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-[#2D2A26] hover:text-[#722F37]"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-link animate-fade-in-up animation-delay-${(index + 1) * 100} ${
                  isActive(item.path) ? 'text-[#722F37]' : ''
                }`}
                data-testid={`mobile-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-8 flex items-center gap-2 text-[#6B6560]">
            <Wine className="w-5 h-5 text-[#722F37]" />
            <span className="font-serif text-lg">Dionysos Café</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
