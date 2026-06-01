import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
  { label: 'Fighters Combat Academy', path: 'https://fighter-combat-academy.netlify.app/', external: true },
  { label: 'Contact', path: '/contact' }
];

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${sticky ? 'bg-crown-dark/95 backdrop-blur-xl shadow-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 text-white flex-shrink-0">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl border border-crown-gold bg-crown-rich text-xs sm:text-lg font-semibold text-crown-gold shadow-glow flex-shrink-0">
            CH
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-crown-beige">Crown Home Spaces</p>
            <p className="text-[10px] sm:text-sm text-crown-gold">Luxury Interiors</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noreferrer"
                className="text-sm uppercase tracking-[0.22em] text-crown-beige transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.22em] transition-colors duration-300 ${isActive ? 'text-crown-gold' : 'text-crown-beige hover:text-white'}`
                }
                onMouseEnter={() => item.label === 'Services' && setShowMega(true)}
                onMouseLeave={() => item.label === 'Services' && setShowMega(false)}
              >
                {item.label}
              </NavLink>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-crown-gold bg-crown-gold/10 px-4 py-2 text-xs sm:text-sm text-crown-beige transition hover:border-white hover:text-white">
            <FaWhatsapp /> WhatsApp
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-crown-gold px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm font-semibold text-crown-dark transition hover:bg-white">
            Get Quote
          </Link>
        </div>

        <button onClick={() => setOpen((prev) => !prev)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-crown-gold text-crown-gold transition hover:bg-crown-gold/10 lg:hidden">
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {showMega && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-0 top-full z-40 hidden w-full max-w-5xl translate-y-3 rounded-b-3xl bg-crown-dark/95 px-8 py-8 shadow-2xl backdrop-blur-xl lg:block">
          <div className="grid grid-cols-2 gap-6 text-sm text-crown-beige">
            {servicesMenu.slice(0, 8).map((service) => (
              <a key={service.title} href="/services" className="rounded-3xl border border-white/5 bg-white/5 px-5 py-4 transition hover:border-crown-gold hover:bg-white/10 hover:text-white">
                <p className="font-semibold text-white">{service.title}</p>
                <p className="mt-2 leading-relaxed text-sm text-crown-beige">{service.description}</p>
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {open && (
        <div className="absolute inset-x-0 top-full z-40 bg-crown-dark/95 px-4 pb-6 pt-4 shadow-2xl backdrop-blur-xl lg:hidden sm:px-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            {navItems.map((item) => (
            item.external ? (
              <a key={item.label} href={item.path} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="text-sm sm:text-base uppercase tracking-[0.2em] text-crown-beige hover:text-white py-2">
                {item.label}
              </a>
            ) : (
              <NavLink key={item.label} to={item.path} onClick={() => setOpen(false)} className="text-sm sm:text-base uppercase tracking-[0.2em] text-crown-beige hover:text-white py-2">
                {item.label}
              </NavLink>
            )
          ))}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs sm:text-sm text-crown-beige sm:gap-3 sm:pt-5">
            <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-2 sm:py-1">
              <FaWhatsapp className="flex-shrink-0" /> +91 95530 41347
            </a>
            <a href="mailto:crownhomespaces@gmail.com" className="inline-flex items-center gap-2 py-2 sm:py-1">
              <FiMail className="flex-shrink-0" /> Email Us
            </a>
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 py-2 sm:py-1">
              <FiMapPin className="flex-shrink-0" /> {businessStreetAddress}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
