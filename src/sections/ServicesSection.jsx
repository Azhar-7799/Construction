import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesList } from '../data/services.js';

const ServicesSection = () => (
  <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-3xl sm:mb-12">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-gold">Our expertise</p>
        <h2 className="mt-3 text-2xl font-semibold text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">Premium construction & interior services for elite spaces.</h2>
        <p className="mt-4 text-sm leading-6 text-crown-beige/90 sm:mt-5 sm:text-base sm:leading-7 md:text-base md:leading-8">
          From construction interiors to architectural elevations, our portfolio demonstrates technical mastery and elegant execution.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
        {servicesList.map((service) => (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="group rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 p-0 sm:p-0 md:p-0 overflow-hidden transition duration-300 hover:border-crown-gold/30 hover:bg-white/10"
          >
            <div className="h-44 w-full overflow-hidden bg-black/10">
              <img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5 sm:p-6 md:p-8">
              <motion.div whileHover={{ y: -4 }} className="text-3xl sm:text-4xl text-crown-gold">{service.icon}</motion.div>
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-6 sm:leading-7 text-crown-beige/90">{service.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-crown-gold transition group-hover:text-white">
                Learn more <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
