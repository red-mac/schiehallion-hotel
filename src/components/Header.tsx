import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/rooms', label: 'Rooms' },
  { path: '/dining', label: 'Dining' },
  { path: '/explore', label: 'Explore' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-highland-green text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 100 100" aria-hidden="true">
              <rect width="100" height="100" rx="20" fill="#d4a853"/>
              <path d="M50 20 L80 75 H20 Z" fill="#1a3c34" opacity="0.9"/>
              <path d="M35 45 L55 75 H15 Z" fill="#7b5e7b" opacity="0.7"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-bold leading-tight">Schiehallion</span>
              <span className="text-xs md:text-sm text-amber-light opacity-90">Hotel & Restaurant</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber ${
                  location.pathname === link.path ? 'text-amber border-b-2 border-amber pb-1' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact#booking"
              className="bg-amber text-highland-green px-5 py-2 rounded-full font-semibold hover:bg-amber-light transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-highland-green-light transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-4"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-highland-green-light ${
                      location.pathname === link.path ? 'bg-highland-green-light text-amber' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact#booking"
                  onClick={() => setIsMenuOpen(false)}
                  className="mx-4 mt-2 bg-amber text-highland-green px-5 py-3 rounded-full font-semibold text-center hover:bg-amber-light transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
