const teamFiles = import.meta.glob('../assets/images/team/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url' });
const teamImages = Object.fromEntries(
  Object.entries(teamFiles).map(([path, value]) => {
    const url = typeof value === 'string' ? value : value?.default || value?.url || '';
    const fileName = path.split('/').pop();
    return [fileName, url];
  })
);

export const team = [
  {
    id: 'azaruddin',
    name: 'Azaruddin',
    role: 'Director of Design & Delivery',
    summary:
      'Experienced leader focused on luxury interior delivery, turnkey project coordination, and premium residential execution with a commitment to quality, aesthetics, and strategic craftsmanship.',
    skills: [
      'Structural Planning',
      'Site Execution',
      'Construction Management',
      'Architectural Coordination',
      'Building Design Support',
      'Project Supervision',
      'Modern Infrastructure Planning',
      'Quality Assurance',
      'Interior & Exterior Coordination'
    ],
    experience: '11+ Years',
    projects: '30+ Successful Projects',
    specialization: 'Luxury Homes & Commercial Infrastructure',
    image: teamImages['azaruddin.jpg'] || '',
    socials: {
      linkedin: 'https://www.linkedin.com/',
      whatsapp: 'https://wa.me/919553041347',
      email: 'mailto:crownhomespaces@gmail.com'
    },
    featured: true
  },
  {
    id: 'ramesh',
    name: 'Ramesh Patel',
    role: 'Senior Project Manager',
    summary:
      'Professional project management expert specializing in construction planning, execution strategy, client coordination, and premium infrastructure delivery with excellent leadership skills.',
    experience: '4+ Years',
    projects: '35+ Projects Completed',
    skills: ['Project Planning', 'Site Coordination', 'Construction Operations', 'Team Leadership'],
    image: teamImages['ramesh.jpg'] || '',
    socials: {
      linkedin: 'https://www.linkedin.com/',
      whatsapp: 'https://wa.me/919553041347',
      email: 'mailto:crownhomespaces@gmail.com'
    }
  },
  {
    id: 'kavya',
    name: 'Kavya Reddy',
    role: 'Interior Design Specialist',
    summary:
      'Creative interior design specialist focused on modern luxury interiors, space planning, elegant aesthetics, smart home concepts, and premium residential styling.',
    experience: '3+ Years',
    projects: '40+ Interior Projects',
    skills: ['Luxury Interiors', 'Space Planning', 'Modern Design Concepts', 'Residential Styling'],
    image: teamImages['kavya.jpg'] || '',
    socials: {
      linkedin: 'https://www.linkedin.com/',
      whatsapp: 'https://wa.me/918712217250',
      email: 'mailto:crownhomespaces@gmail.com'
    }
  },
  {
    id: 'sunil',
    name: 'Sunil Sharma',
    role: 'Construction Operations Head',
    summary:
      'Experienced construction operations professional specializing in site supervision, quality assurance, project execution, workforce coordination, and infrastructure development.',
    experience: '4+ Years',
    projects: '45+ Projects Managed',
    skills: ['Site Supervision', 'Quality Assurance', 'Workforce Management', 'Infrastructure Coordination'],
    image: teamImages['sunil.jpg'] || '',
    socials: {
      linkedin: 'https://www.linkedin.com/',
      whatsapp: 'https://wa.me/919553041347',
      email: 'mailto:crownhomespaces@gmail.com'
    }
  }
];
