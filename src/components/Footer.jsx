import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { founderImage } from '../assets/images/founder/index.js';
import { googleMapsUrl, businessStreetAddress } from '../constants/location.js';

const navLinks = [
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

const serviceLinks = [
  'Luxury Interiors',
  'Architectural Elevations',
  '3D Floor Plans',
  'Landscaping',
  'MEP Drawings',
  'Project Management'
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-crown-dark/95 px-4 py-10 text-crown-beige sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-16">
    <div className="mx-auto grid max-w-7xl gap-6 grid-cols-1 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
      <div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl sm:rounded-3xl bg-crown-rich text-sm sm:text-lg font-bold text-crown-gold flex-shrink-0">CH</div>
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-beige">Crown Home Spaces</p>
            <p className="mt-1 text-sm sm:text-2xl font-semibold text-white">Luxury Interiors & Turnkey Projects</p>
          </div>
        </div>
        <p className="mt-4 max-w-md text-xs sm:text-sm leading-6 sm:leading-7 text-crown-beige/90">
          Delivering cinematic luxury interiors, turnkey project delivery, and premium architectural storytelling from {businessStreetAddress}.
        </p>
        <div className="mt-6 flex items-center gap-3 text-lg sm:text-2xl text-crown-gold">
          <a href="https://instagram.com/crownhomespaces" target="_blank" rel="noreferrer" aria-label="Instagram"> <FaInstagram /> </a>
          <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" aria-label="WhatsApp"> <FaWhatsapp /> </a>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-2">
            <img src={founderImage} alt="Shaik Azaruddin Founder" title="Work with Shaik Azaruddin" loading="lazy" className="h-10 w-10 rounded-lg object-cover" />
            <div>
              <p className="text-sm font-semibold text-white">Work with Founder</p>
              <a href="/master-azhar" className="text-xs text-crown-beige/90 hover:text-white">Book a consultation</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-beige">Navigation</h3>
        <ul className="mt-4 flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm">
          {navLinks.map((link) => (
            <li key={link.path}>
              {link.external ? (
                <a href={link.path} target="_blank" rel="noreferrer" className="transition hover:text-white">{link.label}</a>
              ) : (
                <Link to={link.path} className="transition hover:text-white">{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-beige">Services</h3>
        <ul className="mt-4 flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm">
          {serviceLinks.map((service) => (
            <li key={service} className="transition hover:text-white">{service}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-beige">Contact</h3>
        <div className="mt-4 flex flex-col gap-2 sm:gap-4 text-xs sm:text-sm leading-5 sm:leading-7 text-crown-beige/90">
          <a href="https://wa.me/919553041347" className="inline-flex items-center gap-2 transition hover:text-white"><FaWhatsapp /> +91 95530 41347</a>
          <a href="https://wa.me/918712217250" className="inline-flex items-center gap-2 transition hover:text-white"><FaWhatsapp /> +91 87122 17250</a>
          <a href="mailto:crownhomespaces@gmail.com" className="inline-flex items-center gap-2 transition hover:text-white"><FiMail /> crownhomespaces@gmail.com</a>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white"><FiMapPin /> {businessStreetAddress}</a>
        </div>
      </div>
    </div>

    <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 sm:mt-12 sm:pt-8 text-xs sm:text-sm text-crown-beige/70">
      <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Crown Home Spaces. All rights reserved.</p>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
          <a href="#" className="transition hover:text-white">Privacy Policy</a>
          <a href="#" className="transition hover:text-white">Terms & Conditions</a>
          <a href="/sitemap.xml" className="transition hover:text-white">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
