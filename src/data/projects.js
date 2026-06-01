const fallbackImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0" x2="1" y1="0" y2="1"%3E%3Cstop offset="0%25" stop-color="%23a9865b"/%3E%3Cstop offset="100%25" stop-color="%230f0702"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23g)"/%3E%3Ctext x="50%25" y="48%25" text-anchor="middle" fill="%23fff" font-family="Inter, sans-serif" font-size="48" font-weight="700"%3ELive Project%3C/text%3E%3C/svg%3E';

// Eager-load project image files so project entries use real images when available
const imageFiles = import.meta.glob('../assets/images/projects/**', { eager: true, query: '?url' });

function findImageForFolder(folder) {
  const matches = Object.entries(imageFiles).filter(([path]) => path.includes(`/projects/${folder}/`));
  if (matches.length > 0) {
    const value = matches[0][1];
    return typeof value === 'string' ? value : value?.default || value?.url || fallbackImage;
  }
  return null;
}

function choosePlaceholder(category) {
  // simple category-based placeholder SVG
  const text = encodeURIComponent(category || 'Project');
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%230f0702'/%3E%3Ctext x='50%25' y='48%25' text-anchor='middle' fill='%23d4b37a' font-family='Inter, sans-serif' font-size='36' font-weight='700'%3E${text}%3C/text%3E%3C/svg%3E`;
}

export const projects = [
  {
    title: 'RR Manzil',
    slug: 'rr-manzil',
    folder: 'RR Manzil',
    category: 'Architectural Elevation',
    image: findImageForFolder('RR Manzil') || choosePlaceholder('Architectural Elevation'),
    description: 'A cinematic elevation project with sculpted façade geometry, gold detailing, and premium material layering.'
  },
  {
    title: 'Project 21 DR',
    slug: 'project-21dr',
    folder: 'Project 21 DR',
    category: 'Turnkey Project',
    image: findImageForFolder('Project 21 DR') || choosePlaceholder('Turnkey Project'),
    description: 'A full turnkey interior delivery blending luxury finishes, ambient lighting, and seamless spatial flow.'
  },
  {
    title: 'Phoenix Elysium',
    slug: 'phoenix-elysium',
    folder: 'Phoenix Elysium',
    category: 'Architectural Elevation',
    image: findImageForFolder('Phoenix Elysium') || choosePlaceholder('Architectural Elevation'),
    description: 'Dynamic architectural silhouette, refined glazing, and prestige-driven exterior detailing.'
  },
  {
    title: 'Villa 7',
    slug: 'villa-7',
    folder: 'Villa 7',
    category: 'Architectural Elevation',
    image: findImageForFolder('Villa 7') || choosePlaceholder('Luxury Villa'),
    description: 'A villa facade concept with elegant proportions, layered textures, and premium landscape framing.'
  },
  {
    title: 'Quadri Bungalow',
    slug: 'quadri-bungalow',
    folder: 'Quadri Bungalow',
    category: 'Residential Construction',
    image: findImageForFolder('Quadri Bungalow') || choosePlaceholder('Residential Construction'),
    description: 'A luxury residential construction project with curated interiors, robust delivery, and fine craftsmanship.'
  },
  {
    title: '# 18',
    slug: 'h-18',
    folder: 'h 18',
    category: 'Premium Residential Project',
    image: findImageForFolder('h 18') || choosePlaceholder('Premium Residential Project'),
    description: 'High-end residential execution featuring warm gold accents, glass volumes, and cinematic comfort.'
  }
];
