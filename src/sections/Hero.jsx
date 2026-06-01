import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { founderImage } from '../assets/images/founder/index.js';

const Hero = () => (
  <section className="relative min-h-screen overflow-hidden sm:min-h-[90vh] md:min-h-[100vh]">
    <video
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      src="https://assets.mixkit.co/videos/preview/mixkit-luxury-modern-office-building-36896-large.mp4"
      poster="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-crown-dark/85" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,156,109,0.16),_transparent_35%),linear-gradient(180deg,rgba(26,21,16,0.56),rgba(10,8,6,0.98))]" />
    <div className="relative mx-auto flex min-h-screen w-full items-center justify-center px-4 py-12 text-white sm:min-h-[90vh] sm:px-6 md:min-h-[100vh] md:py-16 lg:px-14">
      <div className="grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <span className="inline-block rounded-full border border-crown-gold/30 bg-crown-gold/10 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-crown-beige sm:px-4 sm:py-2">
              Hyderabad's luxury interiors & turnkey leader
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Crown Home Spaces
            <span className="block text-2xl text-crown-gold sm:text-3xl md:text-4xl lg:text-5xl">Luxury interiors. Strategic construction. Signature architecture.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="max-w-2xl text-sm leading-7 text-crown-beige sm:text-base md:text-lg md:leading-8">
            We craft cinematic residences, corporate landmarks, and premium interior ecosystems with timeless sophistication and disciplined execution.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="https://wa.me/919553041347" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-crown-gold px-6 py-3 text-xs font-semibold text-crown-dark transition hover:bg-white sm:px-8 sm:py-4 sm:text-sm">
              Start Your Project <FiArrowRight className="ml-2 sm:ml-3" size={16} />
            </a>
            <Link to="/projects" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-semibold text-white transition hover:bg-white/10 sm:px-8 sm:py-4 sm:text-sm">
              Explore Projects
            </Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} className="relative mx-auto w-full max-w-md overflow-hidden rounded-[44px] border border-white/10 bg-black/50 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.12),_transparent_40%)] opacity-80" />
          <div className="absolute left-6 top-6 h-20 w-20 rounded-full bg-crown-gold/20 blur-3xl" />
          <div className="absolute right-6 bottom-6 h-24 w-24 rounded-full bg-white/10 blur-3xl" />
          <motion.img
            src={founderImage}
            alt="Shaik Azaruddin Founder of Fighters Combat Academy And Crown Home Spaces"
            title="Shaik Azaruddin Founder of Fighters Combat Academy And Crown Home Spaces"
            loading="lazy"
            className="relative h-[520px] w-full rounded-[32px] object-cover shadow-[0_40px_120px_rgba(0,0,0,0.4)] transition duration-700 hover:scale-[1.01]"
            whileHover={{ scale: 1.02 }}
          />
          <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-[28px] border border-white/10 bg-gradient-to-r from-black/70 via-black/50 to-transparent p-4 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Founder Portrait</p>
            <p className="mt-2 text-lg font-semibold">Shaik Azaruddin</p>
            <p className="mt-1 text-sm text-crown-beige/90">CIVIL ENGINEER | CROWN HOME SPACES | TELANGANA </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
