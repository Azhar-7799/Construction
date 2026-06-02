import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiMail, FiMapPin } from 'react-icons/fi';
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
  { label: 'Fighters Combat Academy', path: 'https://fighter-combat.vercel.app/', external: true, shortLabel: 'FCA' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' }
];

const navLinkClass = ({ isActive }) =>
  `inline-flex min-h-[44px] items-center rounded-lg px-2.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold focus-visible:ring-offset-2 focus-visible:ring-offset-crown-dark 2xl:px-3 2xl:text-xs 2xl:tracking-[0.18em] ${
    isActive ? 'bg-white/10 text-crown-gold' : 'text-crown-beige hover:bg-white/5 hover:text-white'
  }`;

const mobileNavLinkClass = ({ isActive }) =>
  `flex min-h-[48px] items-center rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold ${
    isActive ? 'bg-white/10 text-crown-gold' : 'text-crown-beige hover:bg-white/5 hover:text-white'
  }`;

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setShowMega(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return undefined;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-x-hidden transition-all duration-300 ${
        sticky || open ? 'border-b border-white/10 bg-crown-dark/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
        <Link
          to="/"
          className="flex min-h-[44px] min-w-[44px] flex-shrink-0 items-center gap-2 sm:gap-3"
          onClick={closeMenu}
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-crown-gold bg-crown-rich text-[10px] font-semibold text-crown-gold shadow-glow sm:h-10 sm:w-10 sm:rounded-xl sm:text-xs lg:h-12 lg:w-12 lg:rounded-2xl lg:text-sm">
            CH
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-[9px] uppercase leading-tight tracking-[0.28em] text-crown-beige sm:text-[10px] lg:text-xs lg:tracking-[0.3em]">
              Crown Home Spaces
            </p>
            <p className="truncate text-[9px] font-medium leading-tight text-crown-gold sm:text-xs lg:text-sm">
              Construction & Interior
            </p>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 2xl:flex" aria-label="Main navigation">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noreferrer"
                title={item.label}
                className="inline-flex min-h-[44px] items-center rounded-lg px-2.5 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-crown-beige transition-colors duration-200 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold 2xl:px-3 2xl:text-xs 2xl:tracking-[0.18em]"
              >
                <span className="2xl:hidden">{item.shortLabel ?? item.label}</span>
                <span className="hidden 2xl:inline">{item.label}</span>
              </a>
            ) : (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.label === 'Services' && setShowMega(true)}
                onMouseLeave={() => item.label === 'Services' && setShowMega(false)}
              >
                <NavLink to={item.path} className={navLinkClass} end={item.path === '/'}>
                  {item.label}
                </NavLink>
              </div>
            )
          )}
        </nav>

        <div className="hidden flex-shrink-0 items-center gap-2 2xl:flex">
          <a
            href="https://wa.me/919553041347"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-crown-gold/50 bg-crown-gold/10 px-4 py-2 text-sm text-crown-gold transition hover:border-crown-gold hover:bg-crown-gold/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold"
          >
            <FaWhatsapp size={16} aria-hidden="true" />
            <span className="whitespace-nowrap">WhatsApp</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-full bg-crown-gold px-5 py-2 text-sm font-semibold text-crown-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold focus-visible:ring-offset-2 focus-visible:ring-offset-crown-dark"
          >
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex min-h-[44px] min-w-[44px] flex-shrink-0 items-center justify-center rounded-lg border border-crown-gold/50 text-crown-gold transition hover:bg-crown-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold 2xl:hidden"
        >
          {open ? <FiX size={22} aria-hidden="true" /> : <FiMenu size={22} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {showMega && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setShowMega(true)}
            onMouseLeave={() => setShowMega(false)}
            className="absolute left-1/2 top-full z-40 hidden w-[min(95vw,72rem)] -translate-x-1/2 translate-y-1 rounded-b-2xl border border-white/10 bg-crown-dark/95 px-6 py-8 shadow-2xl backdrop-blur-md 2xl:block"
          >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {servicesMenu.map((service) => (
                <Link
                  key={service.title}
                  to={service.path}
                  className="flex min-h-[44px] flex-col justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-crown-gold/50 hover:bg-white/10"
                >
                  <p className="text-sm font-semibold text-white">{service.title}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-crown-beige/80">{service.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-label="Close menu"
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm 2xl:hidden"
            />

            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col border-l border-white/10 bg-crown-dark shadow-2xl 2xl:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-crown-gold">Menu</p>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-crown-gold/40 text-crown-gold transition hover:bg-crown-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold"
                >
                  <FiX size={22} aria-hidden="true" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto overscroll-contain px-3 py-4" aria-label="Mobile navigation">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) =>
                    item.external ? (
                      <a
                        key={item.label}
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                        className="flex min-h-[48px] items-center rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.2em] text-crown-beige transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <NavLink key={item.label} to={item.path} onClick={closeMenu} className={mobileNavLinkClass} end={item.path === '/'}>
                        {item.label}
                      </NavLink>
                    )
                  )}
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="mb-3 px-4 text-xs uppercase tracking-[0.3em] text-crown-gold">Services</p>
                  <div className="flex flex-col gap-1">
                    {servicesMenu.map((service) => (
                      <Link
                        key={service.title}
                        to={service.path}
                        onClick={closeMenu}
                        className="flex min-h-[48px] flex-col justify-center rounded-xl px-4 py-3 transition hover:bg-white/5"
                      >
                        <span className="text-sm font-medium text-white">{service.title}</span>
                        <span className="mt-0.5 line-clamp-1 text-xs text-crown-beige/80">{service.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              <div className="border-t border-white/10 px-4 py-5">
                <div className="space-y-2">
                  <a
                    href="https://wa.me/919553041347"
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-[48px] items-center gap-3 rounded-xl border border-crown-gold/30 bg-crown-gold/10 px-4 py-3 text-sm text-crown-gold transition hover:bg-crown-gold/20"
                  >
                    <FaWhatsapp size={18} aria-hidden="true" />
                    <span>+91 95530 41347</span>
                  </a>
                  <a
                    href="mailto:crownhomespaces@gmail.com"
                    className="flex min-h-[48px] items-center gap-3 rounded-xl px-4 py-3 text-sm text-crown-beige transition hover:bg-white/5 hover:text-white"
                  >
                    <FiMail size={18} aria-hidden="true" />
                    <span>Email Us</span>
                  </a>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-[48px] items-center gap-3 rounded-xl px-4 py-3 text-sm text-crown-beige transition hover:bg-white/5 hover:text-white"
                  >
                    <FiMapPin size={18} className="flex-shrink-0" aria-hidden="true" />
                    <span className="line-clamp-2">{businessStreetAddress}</span>
                  </a>
                </div>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="mt-4 flex min-h-[48px] w-full items-center justify-center rounded-full bg-crown-gold px-6 py-3 text-center text-sm font-semibold text-crown-dark transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold"
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
