import { Link } from 'react-router-dom';
import { Wine, MapPin, Clock, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#2D2A26] text-[#FAF7F2]/90"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Wine className="w-6 h-6 text-[#B8956E]" />
              <span className="font-serif text-2xl font-medium">Dionysos Café</span>
            </div>
            <p className="text-sm text-[#FAF7F2]/60 leading-relaxed max-w-xs mx-auto md:mx-0">
              Coffee, wine, and small bites in the heart of Athens.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-serif text-lg mb-4 text-[#B8956E]">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="footer-link text-sm hover:text-[#B8956E] transition-colors">Home</Link>
              <Link to="/about" className="footer-link text-sm hover:text-[#B8956E] transition-colors">About</Link>
              <Link to="/menu" className="footer-link text-sm hover:text-[#B8956E] transition-colors">Menu</Link>
              <Link to="/contact" className="footer-link text-sm hover:text-[#B8956E] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg mb-4 text-[#B8956E]">Visit Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-center md:justify-end gap-2 text-[#FAF7F2]/60">
                <MapPin className="w-4 h-4" />
                <span>Ermou Street 25, Athens</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-[#FAF7F2]/60">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 8:00 - 22:00</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-[#FAF7F2]/60">
                <Mail className="w-4 h-4" />
                <span>hello@dionysoscafe.gr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FAF7F2]/10 mt-10 pt-8 text-center">
          <p className="text-xs text-[#FAF7F2]/40">
            © {currentYear} Dionysos Café. Athens, Greece.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
