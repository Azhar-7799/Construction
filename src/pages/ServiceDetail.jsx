import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { servicePages } from '../data/services.js';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicePages.find((item) => item.slug === slug);
  
  const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0" x2="1" y1="0" y2="1"%3E%3Cstop offset="0%25" stop-color="%23403630"/%3E%3Cstop offset="100%25" stop-color="%231c140f"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="600" fill="url(%23grad)"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23fff" font-family="Inter, sans-serif" font-size="48" font-weight="700"%3EPremium Service%3C/text%3E%3C/svg%3E';

  if (!service) {
    return (
      <section className="min-h-screen bg-crown-dark px-4 py-20 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-xl backdrop-blur-xl">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Service Not Found</h1>
          <p className="mt-4 text-base leading-7 text-crown-beige/90">The requested service does not exist or has moved. Explore all services below.</p>
          <Link to="/services" className="mt-8 inline-flex rounded-full bg-crown-gold px-8 py-3 text-sm font-semibold text-crown-dark transition hover:bg-white">View Services</Link>
        </div>
      </section>
    );
  }

  const canonical = `https://crownhomespaces.com/services/${service.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': canonical,
    name: service.title,
    description: service.metaDescription,
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Crown Home Spaces',
      telephone: '+91 9553041347',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'BTR Tower, 3/B, My Home Mangala Rd, Kondapur, Prem Nagar, Hafeezpet, Hyderabad, Telangana 500049',
        addressLocality: 'Kondapur',
        addressRegion: 'Telangana',
        addressCountry: 'India'
      }
    },
    areaServed: ['Hyderabad', 'Kondapur', 'Gachibowli', 'Hitech City', 'Jubilee Hills', 'Banjara Hills', 'Madhapur', 'Financial District'],
    url: canonical
  };

  return (
    <>
      <SEO
        title={service.pageTitle}
        description={service.metaDescription}
        url={canonical}
        image={service.heroImage}
        keywords={service.keywords}
        canonical={canonical}
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="h-full w-full object-cover" 
            loading="lazy" 
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
              e.currentTarget.style.opacity = '0.7';
            }}
          />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-6 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-crown-gold drop-shadow-lg">Service</p>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}>{service.title}</h1>
            <p className="max-w-2xl text-base leading-8 text-gray-100 sm:text-lg drop-shadow-lg" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>{service.heroTagline}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-crown-gold px-6 py-3 text-sm font-semibold text-crown-dark transition hover:bg-white">
                Request Consultation
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Explore All Services
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <img 
              src={service.heroImage} 
              alt={`${service.title} banner`} 
              className="h-[360px] w-full rounded-[24px] object-cover" 
              loading="lazy" 
              decoding="async"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />
          </div>
        </div>
      </section>

      <main className="bg-crown-dark text-white">
        <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-8">
              <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <h2 className="text-3xl font-semibold text-white">About {service.title}</h2>
                {service.about.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base leading-8 text-crown-beige/90">{paragraph}</p>
                ))}
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-white">Our Process</h3>
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
                <h3 className="text-2xl font-semibold text-white">Why choose this service</h3>
                <ul className="mt-6 grid gap-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="rounded-3xl border border-white/10 bg-black/40 p-4 text-sm leading-7 text-crown-beige/90">{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <h3 className="text-2xl font-semibold text-white">Why choose us</h3>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-crown-beige/90">
                  {service.whyChooseUs.map((reason) => (
                    <li key={reason} className="flex gap-3 rounded-3xl border border-white/10 bg-black/40 p-4">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-crown-gold" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-white">Frequently Asked Questions</h2>
              <div className="mt-8 grid gap-6">
                {service.faq.map((item) => (
                  <div key={item.question} className="rounded-3xl border border-white/10 bg-black/40 p-5">
                    <p className="text-base font-semibold text-white">{item.question}</p>
                    <p className="mt-3 text-sm leading-7 text-crown-beige/90">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black/40 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-crown-gold">Ready to begin</p>
            <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Start your {service.title} project with our Hyderabad team.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-8 text-crown-beige/90">Get a consultation, project proposal, and timeline from a service team experienced in Hyderabad’s most premium residential, commercial, and hospitality projects.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-crown-gold px-7 py-4 text-sm font-semibold text-crown-dark transition hover:bg-white">
                Get Free Quote
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/20">
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
