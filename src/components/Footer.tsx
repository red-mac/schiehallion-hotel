import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-10 h-10" viewBox="0 0 100 100" aria-hidden="true">
                <rect width="100" height="100" rx="20" fill="#d4a853"/>
                <path d="M50 20 L80 75 H20 Z" fill="#1a3c34" opacity="0.9"/>
                <path d="M35 45 L55 75 H15 Z" fill="#7b5e7b" opacity="0.7"/>
              </svg>
              <span className="font-display text-xl font-bold">Schiehallion</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your Highland home in Aberfeldy. Experience warm Scottish hospitality, 
              stunning scenery, and unforgettable Highland adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-amber">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link to="/rooms" className="text-gray-300 hover:text-amber transition-colors text-sm">
                    Our Rooms
                  </Link>
                </li>
                <li>
                  <Link to="/dining" className="text-gray-300 hover:text-amber transition-colors text-sm">
                    Restaurant & Bar
                  </Link>
                </li>
                <li>
                  <Link to="/explore" className="text-gray-300 hover:text-amber transition-colors text-sm">
                    Things To Do
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-amber transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-amber">Contact</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>6 Dunkeld Street</p>
              <p>Aberfeldy, Perth and Kinross</p>
              <p>PH15 2AF</p>
              <p className="pt-2">
                <a href="tel:01887820421" className="hover:text-amber transition-colors">
                  01887 820421
                </a>
              </p>
              <p>
                <a href="mailto:bookings@schiehallionhotel.co.uk" className="hover:text-amber transition-colors">
                  bookings@schiehallionhotel.co.uk
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-amber">Opening Hours</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p><span className="font-medium">Bar:</span> 11am - 11pm daily</p>
              <p><span className="font-medium">Restaurant:</span> 12pm - 9pm</p>
              <p><span className="font-medium">Breakfast:</span> 8am - 10am</p>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Schiehallion Hotel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-amber transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
