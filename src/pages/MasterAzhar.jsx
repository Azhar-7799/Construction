import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO.jsx';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { businessStreetAddress, businessLocality, businessRegion, businessCountry } from '../constants/location.js';
import image2 from "../assets/images/founder/image2.png";

const Hero = ({ image }) => (
  <section className="relative flex min-h-screen items-center bg-gradient-to-b from-black/60 to-black/40">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-crown-dark/60 via-transparent to-transparent" />
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-12">
      <div className="max-w-2xl">
        <motion.h1 initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="hero-animate text-4xl font-semibold leading-tight text-crown-gold sm:text-5xl">
          Shaik Azaruddin — Founder of Crown Home Spaces
        </motion.h1>
        <motion.p initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="hero-animate mt-6 max-w-xl text-lg text-crown-beige">
          Luxury Interiors & Turnkey Projects Specialist, leading premium residential delivery and martial arts leadership across Hyderabad.
        </motion.p>

        <div className="hero-animate mt-8 flex flex-wrap gap-3">
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-transparent border border-crown-gold px-5 py-3 text-sm text-crown-gold hover:bg-white/5">View Projects</Link>
          <a href="#founder-story" className="inline-flex items-center gap-2 rounded-full bg-crown-gold px-5 py-3 text-sm font-semibold text-crown-dark">Explore Founder Journey</a>
          <a href="https://fighter-combat-academy.netlify.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-crown-gold bg-crown-gold/10 px-5 py-3 text-sm text-crown-beige">Visit Fighters Combat Academy</a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-sm flex-shrink-0 rounded-3xl border border-white/5 bg-white/5 p-2 backdrop-blur-md lg:ml-auto">
        <motion.img
          src={image2}
          alt="Shaik Azaruddin"
          loading="lazy"
          className="h-[360px] w-full rounded-2xl object-cover object-center shadow-xl sm:h-[420px]"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  </section>
);

const Counter = ({ value, label }) => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    let start = 0;
    const dur = 1200;
    const step = Math.ceil(value / (dur / 50));
    const id = setInterval(() => {
      start += step;
      if (start >= value) {
        setNum(value);
        clearInterval(id);
      } else setNum(start);
    }, 50);
    return () => clearInterval(id);
  }, [value]);

  return (
    <div className="rounded-xl bg-white/3 p-6 text-center">
      <p className="text-3xl font-semibold text-white">{num}</p>
      <p className="mt-2 text-sm text-crown-beige">{label}</p>
    </div>
  );
};

const Gallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;
  return (
    <section className="section-animate mx-auto max-w-7xl px-6 py-20">
      <h3 className="text-xl font-semibold text-crown-gold">Gallery</h3>
      <div className="mt-6 columns-2 gap-4 sm:columns-3 lg:columns-4">
        {images.map((src, i) => (
          <motion.img key={i} src={src} onClick={() => { setIdx(i); setOpen(true); }} whileHover={{ scale: 1.03 }} className="mb-4 w-full cursor-pointer rounded-xl object-cover" alt={`Shaik Azaruddin ${i + 1}`} loading="lazy" />
        ))}
      </div>

      {open && (
        <div onClick={() => setOpen(false)} className="fixed inset-0 z-70 flex items-center justify-center bg-black/80 p-6">
          <img src={images[idx]} alt={`preview ${idx + 1}`} loading="eager" className="max-h-[90vh] max-w-full rounded-lg object-contain" />
        </div>
      )}
    </section>
  );
};

const MasterAzhar = () => {
  const sectionRef = useRef(null);
  const imagesImport = import.meta.glob('../assets/images/founder/*.{jpg,png,jpeg,webp,svg}', { eager: true, query: '?url' });
  const images = Object.values(imagesImport || {}).map((value) => {
    if (typeof value === 'string') return value;
    if (value && typeof value === 'object' && 'default' in value) return value.default;
    return typeof value === 'string' ? value : '';
  }).filter(Boolean);
  const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" x2="1" y1="0" y2="1"%3E%3Cstop offset="0%25" stop-color="%231c140f"/%3E%3Cstop offset="100%25" stop-color="%23b38c66"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="900" fill="url(%23g)"/%3E%3Ctext x="50%25" y="45%25" text-anchor="middle" fill="%23fff" font-family="Inter, sans-serif" font-size="64" font-weight="700"%3EShaik Azaruddin%3C/text%3E%3Ctext x="50%25" y="57%25" text-anchor="middle" fill="%23f7e0c2" font-family="Inter, sans-serif" font-size="28"%3EFounder Profile%3C/text%3E%3C/svg%3E';
  const finalImages = images.length ? images : [fallbackImage, fallbackImage, fallbackImage, fallbackImage, fallbackImage];

  // Prefer a local page-specific image if present (src/pages/master-azhar/image.png or .svg)
  let localFound = null;
  try {
    localFound = new URL('./master-azhar/image.png', import.meta.url).href;
  } catch (e) {
    try {
      localFound = new URL('./master-azhar/image.svg', import.meta.url).href;
    } catch (err) {
      localFound = null;
    }
  }

  const founderImage = localFound || finalImages[0];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      gsap.utils.toArray('.section-animate').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'bottom top',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Shaik Azaruddin',
        url: 'https://crownhomespaces.com/master-azhar',
        sameAs: [
          'https://instagram.com/crownhomespaces',
          'https://wa.me/919553041347'
        ],
        jobTitle: 'Founder of Crown Home Spaces & Fighters Combat Academy',
        image: founderImage,
        description: 'Shaik Azaruddin leads Crown Home Spaces and Fighters Combat Academy, delivering luxury interiors, turnkey project excellence, and martial arts mentorship in Hyderabad.'
      },
      {
        '@type': 'Organization',
        name: 'Crown Home Spaces',
        url: 'https://crownhomespaces.com',
        logo: 'https://crownhomespaces.com/logo.png',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91 9553041347',
            contactType: 'customer service',
            areaServed: 'IN'
          }
        ]
      },
      {
        '@type': 'LocalBusiness',
        name: 'Crown Home Spaces',
        image: founderImage,
        telephone: '+91 9553041347',
        email: 'crownhomespaces@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: businessStreetAddress,
          addressLocality: businessLocality,
          addressRegion: businessRegion,
          addressCountry: businessCountry
        },
        url: 'https://crownhomespaces.com',
        priceRange: '₹₹₹',
        sameAs: ['https://instagram.com/crownhomespaces']
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://crownhomespaces.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Founder',
            item: 'https://crownhomespaces.com/master-azhar'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is Shaik Azaruddin?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Shaik Azaruddin is the founder of Crown Home Spaces and Fighters Combat Academy, known for luxury interiors, turnkey delivery, and martial arts mentorship in Hyderabad.'
            }
          },
          {
            '@type': 'Question',
            name: 'What services does Crown Home Spaces offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Crown Home Spaces delivers premium interiors, architectural design, construction management, and luxury project execution.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div ref={sectionRef} className="relative bg-crown-dark text-white">
      <SEO
        title="Master Azhar & Shaik Azaruddin | Crown Home Spaces Hyderabad"
        description="Shaik Azaruddin and Master Azhar lead Crown Home Spaces and Fighters Combat Academy in Hyderabad. Experts in luxury interiors, turnkey projects, leadership, entrepreneurship, and martial arts excellence."
        url="https://crownhomespaces.com/master-azhar"
        image={founderImage}
        keywords="Shaik Azaruddin, Master Azhar, Crown Home Spaces Founder, Luxury Interiors Hyderabad, Turnkey Projects Hyderabad, Fighters Combat Academy"
      >
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </SEO>

      <Hero image={founderImage} />

      <section className="section-animate mx-auto max-w-7xl px-6 py-20" id="founder-story">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-crown-gold">About Shaik Azaruddin</h3>
            <p className="mt-6 text-crown-beige leading-relaxed">Shaik Azaruddin leads Crown Home Spaces as the founder and luxury interiors specialist. His leadership blends cinematic aesthetics, turnkey delivery, and enterprise-grade project execution for Hyderabad’s most discerning clients.</p>
            <p className="mt-4 text-crown-beige leading-relaxed">He also operates Fighters Combat Academy under the identity of Master Azhar, pairing disciplined martial arts mastery with premium brand storytelling.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/5 bg-white/5 p-6">
              <h4 className="text-sm font-semibold text-crown-beige uppercase">Leadership & Achievements</h4>
              <ul className="mt-4 space-y-2 text-crown-beige">
                <li>Delivered 100+ luxury projects across Telangana</li>
                <li>Recognized for cinematic interior storytelling</li>
                <li>Founder & mentor at Fighters Combat Academy</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Counter value={30} label="Interior Projects Delivered" />
              <Counter value={11} label="Years Experience" />
              <Counter value={30} label="Telangana Areas Served" />
              <Counter value={48} label="Leadership Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-animate mx-auto max-w-7xl px-6 py-12">
        <h3 className="text-2xl font-semibold text-crown-gold">Fighters Combat Academy</h3>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row">
          <div className="flex-1 rounded-3xl border border-white/5 bg-gradient-to-br from-black/30 to-white/5 p-6 backdrop-blur-md">
            <h4 className="text-lg font-semibold">Elite combat training</h4>
            <p className="mt-3 text-crown-beige">The leadership brand behind Crown Home Spaces, Fighters Combat Academy fuses premium discipline with championship-level coaching in Hyderabad.</p>
            <a href="https://fighter-combat-academy.netlify.app/" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-crown-gold px-5 py-3 text-sm font-semibold text-crown-dark">Visit Fighters Combat Academy</a>
          </div>

          <div className="w-full max-w-sm flex-shrink-0">
            <img src={finalImages[1]} alt="Fighters Combat Academy" loading="lazy" className="rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <Gallery images={finalImages} />

      <section className="section-animate mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-2xl font-semibold text-crown-gold">Connect</h3>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="https://instagram.com/crownhomespaces" target="_blank" rel="noreferrer" className="rounded-xl border border-white/5 bg-white/5 px-5 py-4 text-crown-beige"> <FaInstagram /> Instagram</a>
          <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="rounded-xl border border-white/5 bg-white/5 px-5 py-4 text-crown-beige"> <FaWhatsapp /> WhatsApp</a>
          <a href="mailto:crownhomespaces@gmail.com" className="rounded-xl border border-white/5 bg-white/5 px-5 py-4 text-crown-beige"> Email</a>
        </div>
      </section>

      <section className="section-animate mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-r from-black/40 to-black/20 p-10 text-center">
          <h4 className="text-2xl font-semibold text-white">Work with Master Azhar</h4>
          <p className="mt-4 text-crown-beige">Book a consultation for luxury interiors, construction leadership, or martial arts mentorship.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-crown-gold px-6 py-3 text-sm font-semibold text-crown-dark">WhatsApp</a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-crown-gold px-6 py-3 text-sm text-crown-beige">Contact Founder</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterAzhar;
