import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesMenu } from '../data/services.js';
import { googleMapsUrl, businessStreetAddress } from '../constants/location.js';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Live Projects', path: '/live-projects' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Careers', path: '/careers' },
  { label: 'Founder', path: '/master-azhar' },
  { label: 'Fighters Combat Academy', path: 'https://fighter-combat.vercel.app/', external: true },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' }
];

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setShowMega(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = 'unset'; };
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${sticky ? 'bg-crown-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 text-white flex-shrink-0 min-h-[44px] min-w-[44px]">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-lg sm:rounded-xl lg:rounded-2xl border border-crown-gold bg-crown-rich text-[10px] sm:text-xs lg:text-sm font-semibold text-crown-gold shadow-glow flex-shrink-0">
            CH
          </div>
          <div className="hidden sm:block">
            <p className="text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-[0.3em] text-crown-beige leading-tight">Crown Home Spaces</p>
            <p className="text-[9px] sm:text-xs lg:text-sm text-crown-gold font-medium leading-tight">Construction & Interior</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 text-sm uppercase tracking-[0.2em] text-crown-beige transition-colors duration-200 hover:text-white rounded-lg hover:bg-white/5 min-h-[44px] flex items-center"
              >
                {item.label}
              </a>
            ) : (
              <div key={item.path} onMouseEnter={() => item.label === 'Services' && setShowMega(true)} onMouseLeave={() => item.label === 'Services' && setShowMega(false)}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm uppercase tracking-[0.2em] transition-colors duration-200 rounded-lg min-h-[44px] flex items-center ${isActive ? 'text-crown-gold bg-white/5' : 'text-crown-beige hover:text-white hover:bg-white/5'}`
                  }
                >
                  {item.label}
                </NavLink>
              </div>
            )
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-crown-gold/50 bg-crown-gold/10 px-4 py-2 text-sm text-crown-gold transition hover:border-crown-gold hover:bg-crown-gold/20 hover:text-white min-h-[44px]">
            <FaWhatsapp size={16} /> WhatsApp
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-crown-gold px-6 py-2 text-sm font-semibold text-crown-dark transition hover:bg-white min-h-[44px] whitespace-nowrap">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen((prev) => !prev)} 
          aria-expanded={open} 
          aria-label={open ? 'Close menu' : 'Open menu'} 
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-crown-gold/50 text-crown-gold transition hover:bg-crown-gold/10 lg:hidden flex-shrink-0"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Services Mega Menu */}
      <AnimatePresence>
        {showMega && (
          <motion.div 
            initial={{ opacity: 0, y: -12 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            onMouseLeave={() => setShowMega(false)}
            className="absolute left-1/2 top-full z-40 hidden w-[min(95vw,85rem)] -translate-x-1/2 translate-y-2 rounded-b-2xl bg-crown-dark/95 px-6 sm:px-8 py-8 shadow-2xl backdrop-blur-md lg:block"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {servicesMenu.slice(0, 8).map((service) => (
                <Link 
                  key={service.title} 
                  to={service.path} 
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-crown-gold/50 hover:bg-white/10 hover:text-white min-h-[44px] flex flex-col justify-center"
                >
                  <p className="font-semibold text-sm text-white">{service.title}</p>
                  <p className="mt-1 text-xs text-crown-beige/80">{service.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu with Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-16 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              className="absolute inset-x-0 top-full z-50 bg-crown-dark/98 px-4 pb-6 pt-4 shadow-2xl backdrop-blur-md lg:hidden overflow-y-auto max-h-[calc(100vh-64px)]"
            >
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  item.external ? (
                    <a 
                      key={item.label} 
                      href={item.path} 
                      target="_blank" 
                      rel="noreferrer" 
                      onClick={() => setOpen(false)} 
                      className="text-sm uppercase tracking-[0.2em] text-crown-beige hover:text-white px-4 py-3 rounded-lg min-h-[44px] flex items-center transition hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <NavLink 
                      key={item.label} 
                      to={item.path} 
                      onClick={() => setOpen(false)} 
                      className={({ isActive }) =>
                        `text-sm uppercase tracking-[0.2em] px-4 py-3 rounded-lg min-h-[44px] flex items-center transition ${isActive ? 'text-crown-gold bg-white/5' : 'text-crown-beige hover:text-white hover:bg-white/5'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-6 border-t border-white/10 pt-6 space-y-3">
                <a 
                  href="https://wa.me/919553041347" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 px-4 py-3 rounded-lg min-h-[44px] bg-crown-gold/10 border border-crown-gold/30 text-sm text-crown-gold hover:bg-crown-gold/20 transition"
                >
                  <FaWhatsapp size={18} className="flex-shrink-0" /> 
                  <span>+91 95530 41347</span>
                </a>
                <a 
                  href="mailto:crownhomespaces@gmail.com" 
                  className="flex items-center gap-3 px-4 py-3 rounded-lg min-h-[44px] text-crown-beige hover:text-white hover:bg-white/5 transition text-sm"
                >
                  <FiMail size={18} className="flex-shrink-0" />
                  <span>Email Us</span>
                </a>
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 px-4 py-3 rounded-lg min-h-[44px] text-crown-beige hover:text-white hover:bg-white/5 transition text-sm"
                >
                  <FiMapPin size={18} className="flex-shrink-0" />
                  <span className="line-clamp-1">{businessStreetAddress}</span>
                </a>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 flex flex-col gap-2">
                <Link 
                  to="/contact" 
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full bg-crown-gold px-6 py-3 text-center text-sm font-semibold text-crown-dark transition hover:bg-white min-h-[44px] flex items-center justify-center"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
