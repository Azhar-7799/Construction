import { Link } from 'react-router-dom';
import { servicesList } from '../data/services.js';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FALLBACK =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500"%3E%3Crect fill="%231c140f" width="800" height="500"/%3E%3C/svg%3E';

const ServiceCard = ({ service }) => (
  <Link
    to={`/services/${service.slug}`}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-crown-gold/30 hover:bg-white/10 sm:rounded-[32px]"
  >
    <div className="h-44 w-full overflow-hidden bg-black/20 sm:h-48">
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.src = FALLBACK;
        }}
      />
    </div>
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <span className="text-2xl text-crown-gold sm:text-3xl">{service.icon}</span>
      <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">{service.title}</h3>
      <p className="mt-3 flex-1 text-xs leading-6 text-crown-beige/90 sm:text-sm sm:leading-7">{service.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-crown-gold group-hover:text-white">
        Learn more <span aria-hidden="true">→</span>
      </span>
    </div>
  </Link>
);

const ServicesSection = () => (
  <section className="relative overflow-x-hidden px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 max-w-3xl sm:mb-12">
        <p className="text-xs uppercase tracking-[0.35em] text-crown-gold sm:text-sm">Our expertise</p>
        <h2 className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-semibold text-white">
          Premium construction & interior services for elite spaces.
        </h2>
        <p className="mt-4 text-sm leading-7 text-crown-beige/90 sm:text-base">
          From construction interiors to architectural elevations, our portfolio demonstrates technical mastery and elegant execution.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 }
        }}
        className="services-swiper !overflow-visible pb-2"
      >
        {servicesList.map((service) => (
          <SwiperSlide key={service.slug} className="!h-auto">
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default ServicesSection;
