import { testimonials } from '../data/testimonials.js';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const featured = testimonials.find((t) => t.featured) || testimonials[0];
  const others = testimonials.filter((t) => t !== featured);

  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Client feedback</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Trusted by developers, homeowners, and architects.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-full rounded-[32px] border-2 border-crown-gold bg-gradient-to-br from-[#2a1f17] to-[#21160f] p-8 shadow-[0_30px_80px_rgba(198,156,109,0.09)] lg:col-span-3"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 overflow-hidden rounded-2xl border border-crown-gold/30 bg-crown-rich">
                  <img src={featured.image || '/src/assets/images/team-placeholder.jpg'} alt={featured.name} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div>
                <p className="text-lg leading-8 text-crown-beige/90 italic">“{featured.quote}”</p>
                <div className="mt-6">
                  <p className="text-xl font-semibold text-white">{featured.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-crown-gold/90">{featured.title} · {featured.company}</p>
                </div>
              </div>
            </div>
          </motion.article>

          {others.map((item) => (
            <motion.article whileHover={{ y: -6 }} key={item.name} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow transition duration-300 hover:border-crown-gold/30 hover:bg-white/10">
              <p className="leading-7 text-crown-beige/90">“{item.quote}”</p>
              <div className="mt-6">
                <p className="text-lg font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-crown-gold/90">{item.title} · {item.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
