import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';
import { servicesList } from '../data/services.js';
import TeamSection from '../sections/TeamSection.jsx';
import { founderImage } from '../assets/images/founder/index.js';

const About = () => (
  <>
    <SEO title="About Us | Crown Home Spaces" description="Meet Crown Home Spaces, the Kondapur-based leader in construction interiors and turnkey project delivery across Hyderabad and Telangana." />
    <section className="relative overflow-x-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">About the firm</p>
            <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">A heritage of premium interiors and turnkey delivery in Kondapur.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-crown-beige/90">
              Crown Home Spaces is grounded in Telangana with a team of designers, creators, and delivery specialists who craft curated architecture, refined construction interiors, and seamless turnkey execution.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/40 p-4 shadow-glow">
           <motion.img
  src={founderImage}
  alt="Shaik Azaruddin Crown Home Spaces Founder"
  title="Shaik Azaruddin | Founder"
  loading="lazy"
  className="h-full w-full rounded-[28px] object-cover shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
  initial={{ scale: 0.99 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.1, ease: 'easeOut' }}
/>

            <div className="absolute right-6 bottom-6 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">Design-led quality</p>
              <p className="mt-1 text-xs text-crown-beige/90">Polished execution with layered materials and architectural finesse.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {servicesList.slice(0, 6).map((service) => (
            <motion.article key={service.title} whileHover={{ y: -6 }} className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition hover:border-crown-gold/30 hover:bg-white/10">
              <p className="text-3xl">{service.icon}</p>
              <h2 className="mt-5 text-xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-crown-beige/90">{service.description}</p>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-glow">
            <h3 className="text-sm uppercase tracking-[0.35em] text-crown-gold">Experience & Delivery</h3>
            <p className="mt-4 text-lg text-crown-beige/90">Our delivery strength is led by Azaruddin, the experience director whose technical leadership underpins construction interiors, turnkey execution, and premium stakeholder confidence.</p>
          </div>

        </div>
        <TeamSection />
      </div>
    </section>
  </>
);

export default About;
