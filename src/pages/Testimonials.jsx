import { testimonials } from '../data/testimonials.js';
import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';

const Testimonials = () => (
  <>
    <SEO title="Testimonials | Crown Home Spaces" description="Client testimonials for Crown Home Spaces' luxury interior and construction projects." />
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Client testimonials</p>
          <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">What our clients say about Crown Home Spaces.</h1>
          <p className="mt-6 text-lg leading-8 text-crown-beige/90">
            Verified feedback from homeowners, developers, and design partners highlighting our commitment to quality, transparency, and premium results.
          </p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-3">
          {testimonials.map((item) => (
            <motion.article key={item.name} whileHover={{ y: -6 }} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow transition hover:border-crown-gold/30 hover:bg-white/10">
              <p className="leading-8 text-crown-beige/90">“{item.quote}”</p>
              <div className="mt-8">
                <p className="text-xl font-semibold text-white">{item.name}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-crown-gold/90">{item.title} · {item.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Testimonials;
