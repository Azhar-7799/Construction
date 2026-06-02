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
  { label: 'Live Projects', path: '/live-projects', shortLabel: 'Live' },
  { label: 'Testimonials', path: '/testimonials', shortLabel: 'Reviews' },
  { label: 'Careers', path: '/careers' },
  { label: 'Founder', path: '/master-azhar' },
  { label: 'Fighters Combat Academy', path: 'https://fighter-combat.vercel.app/', external: true, shortLabel: 'FCA' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' }
];

export default function Header() {
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
    const onEscape = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 overflow-x-hidden transition-all duration-300 ${sticky || open ? 'border-b border-white/10 bg-crown-dark/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 sm:gap-5 xl:gap-6 2xl:gap-8">
        <Link to="/" onClick={closeMenu} className="flex min-h-[44px] shrink-0 items-center gap-2 sm:gap-3 xl:max-w-[3.5rem] xl:pr-4 2xl:max-w-none 2xl:pr-6">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-crown-gold bg-crown-rich text-[10px] font-semibold text-crown-gold sm:h-10 sm:w-10 sm:text-xs 2xl:h-12 2xl:w-12 2xl:rounded-2xl 2xl:text-sm">CH</div>
          <div className="hidden min-w-0 sm:block xl:hidden 2xl:block">
            <p className="truncate text-[9px] uppercase leading-tight tracking-[0.22em] text-crown-beige 2xl:text-xs">Crown Home Spaces</p>
            <p className="truncate text-[9px] font-medium leading-tight text-crown-gold sm:text-xs 2xl:text-sm">Construction & Interior</p>
          </div>
        </Link>

        <nav className="hidden min-w-0 items-center justify-center gap-x-1.5 px-2 xl:flex xl:gap-x-2 2xl:gap-x-2.5 2xl:px-4" aria-label="Main">
          {navItems.map((item) => item.external ? (
            <a key={item.path} href={item.path} target="_blank" rel="noreferrer" title={item.label} className="inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap rounded-lg px-2 py-2 text-[10px] uppercase tracking-[0.1em] text-crown-beige hover:bg-white/5 hover:text-white xl:px-2.5 xl:text-[11px] 2xl:px-3 2xl:text-xs">
              <span className="2xl:hidden">{item.shortLabel ?? item.label}</span>
              <span className="hidden 2xl:inline">{item.label}</span>
            </a>
          ) : (
            <div key={item.path} className="shrink-0" onMouseEnter={() => item.label === 'Services' && setShowMega(true)} onMouseLeave={() => item.label === 'Services' && setShowMega(false)}>
              <NavLink to={item.path} end={item.path === '/'} className={({ isActive }) => `inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap rounded-lg px-2 py-2 text-[10px] uppercase tracking-[0.1em] xl:px-2.5 xl:text-[11px] 2xl:px-3 2xl:text-xs ${isActive ? 'bg-white/10 text-crown-gold' : 'text-crown-beige hover:bg-white/5 hover:text-white'}`}>
                <span className="2xl:hidden">{item.shortLabel ?? item.label}</span>
                <span className="hidden 2xl:inline">{item.label}</span>
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2 xl:gap-3 xl:pl-4 2xl:pl-6">
          <div className="hidden items-center gap-2 border-l border-white/10 pl-4 xl:flex 2xl:gap-3 2xl:pl-6">
            <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-crown-gold/50 bg-crown-gold/10 px-3 py-2 text-xs text-crown-gold hover:bg-crown-gold/20 2xl:gap-2 2xl:px-4 2xl:text-sm"><FaWhatsapp size={16} /> WhatsApp</a>
            <Link to="/contact" className="inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap rounded-full bg-crown-gold px-4 py-2 text-xs font-semibold text-crown-dark hover:bg-white 2xl:px-5 2xl:text-sm">Get Quote</Link>
          </div>
          <button type="button" onClick={() => setOpen((p) => !p)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg border border-crown-gold/50 text-crown-gold xl:hidden">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
        </div>
      </div>

      <AnimatePresence>
        {showMega && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} onMouseEnter={() => setShowMega(true)} onMouseLeave={() => setShowMega(false)} className="absolute left-1/2 top-full z-40 hidden w-[min(95vw,72rem)] -translate-x-1/2 translate-y-1 rounded-b-2xl border border-white/10 bg-crown-dark/95 px-6 py-8 shadow-2xl backdrop-blur-md xl:block">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {servicesMenu.map((service) => (
                <Link key={service.title} to={service.path} className="flex min-h-[44px] flex-col justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:border-crown-gold/50 hover:bg-white/10">
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
            <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Close menu" onClick={closeMenu} className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm xl:hidden" />
            <motion.div id="mobile-navigation" role="dialog" aria-modal="true" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.28 }} className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col border-l border-white/10 bg-crown-dark shadow-2xl xl:hidden">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-crown-gold">Menu</p>
                <button type="button" onClick={closeMenu} aria-label="Close menu" className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-crown-gold/40 text-crown-gold"><FiX size={22} /></button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4">
                {navItems.map((item) => item.external ? (
                  <a key={item.label} href={item.path} target="_blank" rel="noreferrer" onClick={closeMenu} className="flex min-h-[48px] items-center rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] text-crown-beige hover:bg-white/5 hover:text-white">{item.label}</a>
                ) : (
                  <NavLink key={item.label} to={item.path} end={item.path === '/'} onClick={closeMenu} className={({ isActive }) => `flex min-h-[48px] items-center rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] ${isActive ? 'bg-white/10 text-crown-gold' : 'text-crown-beige hover:bg-white/5 hover:text-white'}`}>{item.label}</NavLink>
                ))}
                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="mb-3 px-4 text-xs uppercase tracking-[0.3em] text-crown-gold">Services</p>
                  {servicesMenu.map((service) => (
                    <Link key={service.title} to={service.path} onClick={closeMenu} className="flex min-h-[48px] flex-col justify-center rounded-xl px-4 py-3 hover:bg-white/5">
                      <span className="text-sm font-medium text-white">{service.title}</span>
                      <span className="line-clamp-1 text-xs text-crown-beige/80">{service.description}</span>
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="border-t border-white/10 px-4 py-5 space-y-2">
                <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="flex min-h-[48px] items-center gap-3 rounded-xl border border-crown-gold/30 bg-crown-gold/10 px-4 text-sm text-crown-gold"><FaWhatsapp size={18} /> +91 95530 41347</a>
                <a href="mailto:crownhomespaces@gmail.com" className="flex min-h-[48px] items-center gap-3 rounded-xl px-4 text-sm text-crown-beige hover:bg-white/5"><FiMail size={18} /> Email Us</a>
                <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="flex min-h-[48px] items-center gap-3 rounded-xl px-4 text-sm text-crown-beige hover:bg-white/5"><FiMapPin size={18} className="flex-shrink-0" /><span className="line-clamp-2">{businessStreetAddress}</span></a>
                <Link to="/contact" onClick={closeMenu} className="mt-2 flex min-h-[48px] w-full items-center justify-center rounded-full bg-crown-gold text-sm font-semibold text-crown-dark hover:bg-white">Get Quote</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
