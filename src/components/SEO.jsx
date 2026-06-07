import { Helmet } from 'react-helmet-async';
import { businessStreetAddress, businessLocality, businessRegion, businessCountry, googleMapsUrl } from '../constants/location.js';

const defaultMeta = {
  title: 'Crown Home Spaces | Construction & Interior Services in Telangana',
  description: `Crown Home Spaces is a premium construction and interior company based at ${businessStreetAddress}, delivering elite architecture, residential construction, and project delivery across Hyderabad.`,
  url: 'https://crownhomespaces.com',
  image: 'https://crownhomespaces.com/og-image.jpg',
  keywords: 'Construction Hyderabad, Interior Designers Hyderabad, Turnkey Projects Hyderabad, Premium Construction Services Hyderabad, Crown Home Spaces Hyderabad'
};

const SEO = ({ title, description, url, image, keywords, canonical, structuredData, children }) => {
  const meta = {
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    url: url || defaultMeta.url,
    image: image || defaultMeta.image,
    keywords: keywords || defaultMeta.keywords,
    canonical: canonical || url || defaultMeta.url
  };

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Crown Home Spaces',
        url: meta.url,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${meta.url}/?s={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'Organization',
        name: 'Crown Home Spaces',
        url: meta.url,
        logo: 'https://crownhomespaces.com/logo.png',
        sameAs: [
          'https://instagram.com/crownhomespaces',
          'https://wa.me/919553041347',
          googleMapsUrl
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+91 9553041347',
            contactType: 'customer service',
            areaServed: 'Telangana'
          }
        ]
      },
      {
        '@type': 'LocalBusiness',
        name: 'Crown Home Spaces',
        image: meta.image,
        telephone: '+91 9553041347',
        email: 'crownhomespaces@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: businessStreetAddress,
          addressLocality: businessLocality,
          addressRegion: businessRegion,
          addressCountry: businessCountry
        },
        priceRange: '₹₹₹',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '17.3850',
          longitude: '78.4867'
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '19:00'
          }
        ],
        serviceType: 'Construction and Interior Services'
      },
      {
        '@type': 'ProfessionalService',
        name: 'Crown Home Spaces',
        url: meta.url,
        description: meta.description,
        areaServed: 'Telangana, Hyderabad, India'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://crownhomespaces.com/'
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={meta.canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.canonical} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:site_name" content="Crown Home Spaces" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <script type="application/ld+json">{JSON.stringify(defaultJsonLd)}</script>
      {structuredData && <script type="application/ld+json">{JSON.stringify(structuredData)}</script>}
      {children}
    </Helmet>
  );
};

export default SEO;
