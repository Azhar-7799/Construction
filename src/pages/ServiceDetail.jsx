import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { servicePages, serviceHeroImages } from '../data/services.js';

const FALLBACK_HERO =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" y1="0" x2="1" y2="1"%3E%3Cstop offset="0%25" stop-color="%23403630"/%3E%3Cstop offset="100%25" stop-color="%231c140f"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="600" fill="url(%23g)"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23fff" font-family="Inter,sans-serif" font-size="42" font-weight="700"%3ECrown Home Spaces%3C/text%3E%3C/svg%3E';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicePages.find((item) => item.slug === slug);
  const heroSrc = service ? serviceHeroImages[service.slug] || service.heroImage : FALLBACK_HERO;

  if (!service) {
    return (
      <section className="min-h-[60vh] bg-crown-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Service Not Found</h1>
          <p className="mt-4 text-crown-beige/90">The requested service does not exist or has moved.</p>
          <Link to="/services" className="mt-8 inline-flex rounded-full bg-crown-gold px-8 py-3 text-sm font-semibold text-crown-dark hover:bg-white">
            View All Services
          </Link>
        </div>
      </section>
    );
  }

  const canonical = `https://crownhomespaces.com/services/${service.slug}`;
  const titleShadow = { textShadow: '0 4px 20px rgba(0,0,0,0.85)' };
  const bodyShadow = { textShadow: '0 2px 12px rgba(0,0,0,0.75)' };

  const onImgError = (e) => {
    e.currentTarget.src = FALLBACK_HERO;
  };

  return (
    <>
      <SEO
        title={service.pageTitle}
        description={service.metaDescription}
        url={canonical}
        image={heroSrc}
        keywords={service.keywords}
        canonical={canonical}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.metaDescription,
          provider: { '@type': 'LocalBusiness', name: 'Crown Home Spaces' },
          url: canonical
        }}
      />

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 z-0">
          <img src={heroSrc} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="eager" decoding="async" onError={onImgError} />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/65" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/75" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/45 via-transparent to-black/80" aria-hidden="true" />

        <div className="relative z-20 mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-6 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-crown-gold" style={bodyShadow}>Service</p>
            <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold leading-tight text-white" style={titleShadow}>{service.title}</h1>
            <p className="max-w-2xl text-base leading-8 text-gray-100 sm:text-lg" style={bodyShadow}>{service.heroTagline}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-crown-gold px-6 py-3 text-sm font-semibold text-crown-dark shadow-lg hover:bg-white">
                Request Consultation
              </Link>
              <Link to="/services" className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20">
                Explore All Services
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl">
            <img src={heroSrc} alt={`${service.title} preview`} className="h-[280px] w-full rounded-[24px] object-cover sm:h-[360px]" loading="lazy" decoding="async" onError={onImgError} />
          </div>
        </div>
      </section>

      <main className="bg-crown-dark text-white">
        <section className="px-4 py-12 md:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-8">
              <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-3xl font-semibold">About {service.title}</h2>
                {service.about.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base leading-8 text-crown-beige/90">{paragraph}</p>
                ))}
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="text-2xl font-semibold">Our Process</h3>
                <div className="mt-6 space-y-4">
                  {service.processSteps.map((step) => (
                    <div key={step.title} className="rounded-3xl border border-white/10 bg-black/40 p-4 sm:p-5">
                      <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">{step.title}</p>
                      <p className="mt-2 text-sm leading-7 text-crown-beige/90">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <aside className="space-y-8">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="text-2xl font-semibold">Why choose this service</h3>
                <ul className="mt-6 grid gap-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="rounded-3xl border border-white/10 bg-black/40 p-4 text-sm leading-7 text-crown-beige/90">{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="text-2xl font-semibold">Why choose us</h3>
                <ul className="mt-6 space-y-3">
                  {service.whyChooseUs.map((reason) => (
                    <li key={reason} className="flex gap-3 rounded-3xl border border-white/10 bg-black/40 p-4 text-sm leading-7 text-crown-beige/90">
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-crown-gold" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-4 py-12 md:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
            <div className="mt-8 grid gap-6">
              {service.faq.map((item) => (
                <div key={item.question} className="rounded-3xl border border-white/10 bg-black/40 p-5">
                  <p className="text-base font-semibold text-white">{item.question}</p>
                  <p className="mt-3 text-sm leading-7 text-crown-beige/90">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black/40 px-4 py-12 md:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-crown-gold">Ready to begin</p>
            <h2 className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-semibold">Start your {service.title} project with our Hyderabad team.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-crown-beige/90">
              Get a consultation, project proposal, and timeline from a team experienced in premium Hyderabad projects.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-[44px] items-center rounded-full bg-crown-gold px-7 py-4 text-sm font-semibold text-crown-dark hover:bg-white">
                Get Free Quote
              </Link>
              <Link to="/services" className="inline-flex min-h-[44px] items-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white hover:bg-white/20">
                View Other Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceDetail;
