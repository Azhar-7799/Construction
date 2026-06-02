import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';
import { servicesList } from '../data/services.js';

const Services = () => (
  <>
    <SEO
      title="Services | Crown Home Spaces"
      description="Explore construction interiors, turnkey projects, architectural elevations, commercial construction and premium hospitality projects in Hyderabad."
    />
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-gold">Service experience</p>
          <h1 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">End-to-end services crafted for premium living and commercial excellence.</h1>
          <p className="mt-4 text-sm leading-6 text-crown-beige/90 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            Our service offering blends architectural vision, engineering reliability, interior craftsmanship, and disciplined project delivery for meaningful Hyderabad spaces.
          </p>
        </div>

        <div className="mt-10 grid gap-4 grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:mt-12">
          {servicesList.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 p-0 sm:p-0 md:p-0 overflow-hidden transition hover:border-crown-gold/30 hover:bg-white/10"
            >
              <div className="h-48 w-full overflow-hidden bg-black/10">
                <img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 sm:p-6 md:p-8">
                <motion.p whileHover={{ y: -4 }} className="text-2xl sm:text-3xl text-crown-gold">
                  {service.icon}
                </motion.p>
                <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-crown-beige/90">{service.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-crown-gold transition group-hover:text-white">
                  Explore service <span aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
