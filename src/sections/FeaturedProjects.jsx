import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedProjects = () => (
  <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-14 lg:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col gap-2 sm:mb-12 sm:gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-crown-gold">Project showcase</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:mt-3 sm:text-3xl md:text-4xl lg:text-5xl">Crafted spaces with architectural presence.</h2>
        </div>
        <p className="max-w-xl text-xs leading-5 text-crown-beige/90 sm:text-sm sm:leading-6 md:text-base md:leading-7">
          An immersive gallery of corporate, residential, and landscape projects engineered for luxury, comfort, and enduring quality.
        </p>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        breakpoints={{ 640: { slidesPerView: 1, spaceBetween: 20 }, 1024: { slidesPerView: 2, spaceBetween: 24 } }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <motion.article whileHover={{ scale: 1.01 }} className="group overflow-hidden rounded-2xl sm:rounded-[32px] border border-white/10 bg-gradient-to-br from-[#161113] via-[#1f1710] to-[#221a14] shadow-glow">
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
                <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-flex rounded-full bg-crown-gold/15 px-3 py-1 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-crown-gold">{project.category}</span>
                  <h3 className="mt-3 sm:mt-4 text-lg sm:text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="space-y-2 p-5 sm:space-y-3 sm:p-6 md:p-8">
                <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-crown-beige/90">{project.description}</p>
                <Link to="/projects" className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-crown-gold transition hover:text-white">
                  View case study
                </Link>
              </div>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default FeaturedProjects;
