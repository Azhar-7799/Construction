import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesMenu } from '../data/services.js';
import { googleMapsUrl, businessStreetAddress } from '../constants/location.js';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Live Projects', path: '/live-projects', short: 'Live' },
  { label: 'Testimonials', path: '/testimonials', short: 'Reviews' },
  { label: 'Careers', path: '/careers' },
  { label: 'Founder', path: '/master-azhar' },
  { label: 'Fighters Combat Academy', path: 'https://fighter-combat.vercel.app/', external: true, short: 'FCA' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' }
];

const desktopLink = (active) =>
  `inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-md px-2 text-[10px] font-medium uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crown-gold xl:px-2.5 xl:text-[11px] 2xl:px-3 2xl:text-xs ${
    active ? 'text-crown-gold' : 'text-crown-beige hover:text-white'
  }`;

const mobileLink = (active) =>
  `flex min-h-[48px] items-center rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors ${
    active ? 'bg-gray-100 font-semibold text-black' : 'text-gray-900 hover:bg-gray-100'
  }`;

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  const navLabel = (item, full = false) => {
    if (full || !item.short) return item.label;
    return (
      <>
        <span className="2xl:hidden">{item.short}</span>
        <span className="hidden 2xl:inline">{item.label}</span>
      </>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        sticky || open ? 'border-b border-white/10 bg-crown-dark/95 shadow-lg backdrop-blur-md' : 'bg-crown-dark/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex min-h-14 max-w-7xl items-center justify-between gap-2 px-4 py-1 sm:min-h-16 sm:gap-3 sm:px-6 lg:gap-4 lg:px-8">
        <Link to="/" onClick={close} className="flex min-w-fit shrink-0 items-center gap-2 sm:gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-crown-gold bg-crown-rich text-[11px] font-bold text-crown-gold sm:h-10 sm:w-10">
            CH
          </span>
          <span className="min-w-fit shrink-0">
            <span className="block whitespace-nowrap text-sm font-bold tracking-wide text-crown-beige sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Crown Home Spaces
            </span>
            <span className="block whitespace-nowrap text-[10px] font-medium tracking-wide text-crown-gold sm:text-xs md:text-sm">
              Construction & Interior
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-fit items-center justify-center gap-0.5 lg:flex flex-1" aria-label="Main navigation">
          {navItems.map((item) =>
            item.external ? (
              <a key={item.path} href={item.path} target="_blank" rel="noreferrer" title={item.label} className={desktopLink(false)}>
                {navLabel(item)}
              </a>
            ) : (
              <div
                key={item.path}
                className="shrink-0 relative group"
              >
                <Link to={item.path} end={item.path === '/'} className={({ isActive }) => desktopLink(isActive)}>
                  {navLabel(item)}
                </Link>
                {item.path === '/services' && (
                  <div
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    onMouseEnter={() => setShowMega(true)}
                    onMouseLeave={() => setShowMega(false)}
                  >
                    <div className="w-[min(96vw,72rem)] border border-white/10 bg-crown-dark/98 px-4 py-6 shadow-2xl backdrop-blur-md">
                      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                        {servicesMenu.map((service) => (
                          <Link key={service.title} to={service.path} className="rounded-xl border border-white/10 bg-white/5 p-3 hover:border-crown-gold/40 hover:bg-white/10">
                            <p className="text-xs font-semibold text-white">{service.title}</p>
                            <p className="mt-1 line-clamp-2 text-[10px] text-crown-beige/80">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2">
          <a
            href="https://wa.me/919553041347"
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 items-center gap-1.5 rounded-full border border-crown-gold/40 bg-crown-gold/10 px-3 text-xs text-crown-gold hover:bg-crown-gold/20 lg:inline-flex 2xl:px-4"
          >
            <FaWhatsapp size={15} aria-hidden="true" />
            <span className="hidden 2xl:inline">WhatsApp</span>
          </a>
          <Link to="/contact" className="hidden h-10 items-center rounded-full bg-crown-gold px-4 text-xs font-semibold text-crown-dark hover:bg-white lg:inline-flex">
            Get Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-crown-gold/50 text-crown-gold lg:hidden"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>


      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
              onClick={close}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Navigation</p>
                <button type="button" onClick={close} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100">
                  <FiX size={22} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                {navItems.map((item) =>
                  item.external ? (
                    <a key={item.label} href={item.path} target="_blank" rel="noreferrer" onClick={close} className={mobileLink(false)}>
                      {item.label}
                    </a>
                  ) : (
                    <NavLink key={item.label} to={item.path} end={item.path === '/'} onClick={close} className={({ isActive }) => mobileLink(isActive)}>
                      {item.label}
                    </NavLink>
                  )
                )}
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-widest text-gray-500">Services</p>
                  {servicesMenu.map((service) => (
                    <Link key={service.title} to={service.path} onClick={close} className="block rounded-lg px-4 py-3 text-sm text-gray-900 hover:bg-gray-100">
                      {service.title}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="space-y-2 border-t border-gray-200 bg-gray-50 p-4">
                <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="flex min-h-[48px] items-center gap-3 rounded-lg border border-crown-gold/30 bg-white px-4 text-sm font-medium text-gray-900">
                  <FaWhatsapp className="text-crown-gold" /> +91 95530 41347
                </a>
                <a href="mailto:crownhomespaces@gmail.com" className="flex min-h-[48px] items-center gap-3 rounded-lg px-4 text-sm text-gray-900 hover:bg-gray-100">
                  <FiMail /> Email Us
                </a>
                <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="flex min-h-[48px] items-center gap-3 rounded-lg px-4 text-sm text-gray-900 hover:bg-gray-100">
                  <FiMapPin className="shrink-0" />
                  <span className="line-clamp-2">{businessStreetAddress}</span>
                </a>
                <Link to="/contact" onClick={close} className="flex min-h-[48px] items-center justify-center rounded-full bg-crown-gold text-sm font-semibold text-crown-dark hover:bg-white">
                  Get Quote
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
