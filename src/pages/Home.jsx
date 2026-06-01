import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Hero from '../sections/Hero.jsx';
import ServicesSection from '../sections/ServicesSection.jsx';
import FeaturedProjects from '../sections/FeaturedProjects.jsx';
import WhyChooseSection from '../sections/WhyChooseSection.jsx';
import TeamSection from '../sections/TeamSection.jsx';
import ContactPreview from '../sections/ContactPreview.jsx';
import { founderImage } from '../assets/images/founder/index.js';
import { businessStreetAddress } from '../constants/location.js';

const Home = () => (
  <>
    <SEO
      title="Crown Home Spaces | Luxury Interiors & Turnkey Projects in Kondapur"
      description={`Crown Home Spaces delivers luxury interiors, turnkey projects, and premium architectural experiences from ${businessStreetAddress}.`}
      image={founderImage}
    />
    <Hero />
    <main className="bg-crown-dark">
      <ServicesSection />
      <FeaturedProjects />

      <section className="px-4 py-14 sm:px-6 sm:py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-black/40 p-6 shadow-glow backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-crown-gold">Founder of Fighters Combat Academy</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Leadership beyond construction and luxury interiors.</h2>
              <p className="max-w-2xl text-base leading-8 text-crown-beige/90 sm:text-lg">Shaik Azaruddin leads both Crown Home Spaces and Fighters Combat Academy with a vision focused on discipline, leadership, transformation, and premium excellence.</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://fighter-combat-academy.netlify.app/" target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-crown-gold px-6 py-3 text-sm font-semibold text-crown-dark transition hover:bg-white">Visit Fighters Combat Academy</a>
                <Link to="/master-azhar" className="inline-flex rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white transition hover:bg-white/10">Explore Founder Journey</Link>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} className="relative mx-auto w-full overflow-hidden rounded-[36px] border border-crown-gold/20 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.16),_transparent_40%)]" />
              <img src={founderImage} alt="Shaik Azaruddin Crown Home Spaces Founder" title="Shaik Azaruddin | Founder of Crown Home Spaces" loading="lazy" className="relative h-[420px] w-full rounded-[28px] object-cover shadow-[0_35px_80px_rgba(0,0,0,0.4)] transition duration-700 hover:scale-[1.01]" />
              <div className="absolute inset-x-4 bottom-4 rounded-[28px] border border-white/10 bg-black/70 p-5 text-white backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.35em] text-crown-gold">Founder Portrait</p>
                <p className="mt-2 text-xl font-semibold">Shaik Azaruddin</p>
                <p className="mt-1 text-sm text-crown-beige/90">CIVIL ENGINEER | CROWN HOME SPACES | KONDAPUR</p>
              </div>
            </motion.div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: '11+', label: 'Years Experience' },
              { value: '30+', label: 'Luxury Projects Delivered' },
              { value: '30+', label: 'Telangana Areas Served' }
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition hover:border-crown-gold/30 hover:bg-white/10">
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.35em] text-crown-gold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />

      <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8 shadow-glow">
            <h3 className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-gold">Meet Our Lead Engineer</h3>
            <p className="mt-3 text-xl sm:mt-4 sm:text-2xl md:text-3xl font-semibold text-white">Azaruddin — Core engineering strength of Crown Home Spaces</p>
            <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 md:text-base md:leading-8 text-crown-beige/90">Experienced Lead Civil Engineer delivering structural assurance, project supervision and construction excellence across luxury homes and commercial infrastructure.</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:gap-6">
              <div className="rounded-2xl sm:rounded-3xl bg-crown-rich/40 px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4">
                <p className="text-lg sm:text-2xl font-semibold text-white">30+</p>
                <p className="mt-1 text-xs sm:text-sm text-crown-beige/90">Projects Delivered</p>
              </div>
              <div className="rounded-2xl sm:rounded-3xl bg-crown-rich/40 px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4">
                <p className="text-lg sm:text-2xl font-semibold text-white">11+</p>
                <p className="mt-1 text-xs sm:text-sm text-crown-beige/90">Years Experience</p>
              </div>
              <div className="rounded-2xl sm:rounded-3xl bg-crown-rich/40 px-4 py-3 sm:px-6 sm:py-4 md:px-6 md:py-4">
                <p className="text-lg sm:text-2xl font-semibold text-white">Luxury</p>
                <p className="mt-1 text-xs sm:text-sm text-crown-beige/90">Specialization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <ContactPreview />
    </main>
  </>
);

export default Home;
