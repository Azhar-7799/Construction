import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
import SEO from '../components/SEO.jsx';

// Import images per-folder (avoid globbing problematic folder names like ones containing '#')
const globsByFolder = {
  'RR Majil': import.meta.glob('../assets/images/projects/RR Majil/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url' }),
  'Project 21 DR': import.meta.glob('../assets/images/projects/Project 21 DR/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url' }),
  'Phoenix Elysium': import.meta.glob('../assets/images/projects/Phoenix Elysium/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url' }),
  'Villa 7': import.meta.glob('../assets/images/projects/Villa 7/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url' }),
  'Qudri Bungalow': import.meta.glob('../assets/images/projects/Qudri Bungalow/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url' }),
  'h 18': import.meta.glob('../assets/images/projects/h 18/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url' })
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const images = useMemo(() => {
    if (!project) return [];
    const folder = project.folder;
    const folderGlob = globsByFolder[folder];
    if (!folderGlob) return [];
    return Object.entries(folderGlob)
      .map(([, value]) => (typeof value === 'string' ? value : value?.default || value?.url))
      .filter(Boolean);
  }, [project]);

  if (!project) {
    return (
      <div className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold text-white">Project not found</h1>
          <p className="mt-4 text-crown-beige/90">The project you requested does not exist.</p>
          <Link to="/projects" className="mt-6 inline-block rounded-full bg-crown-gold px-6 py-3 text-sm font-semibold text-crown-dark">Back to projects</Link>
        </div>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <SEO title={`${project.title} | Crown Home Spaces`} description={project.description} image={project.image} />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Project</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">{project.title}</h1>
            <p className="mt-4 text-crown-beige/90">{project.description}</p>
            <div className="mt-6">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white">Back to projects</Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(images.length > 0 ? images : [project.image]).map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-[#0d0b09]">
                <button type="button" onClick={() => setSelectedImage(src)} className="w-full h-full focus:outline-none">
                  <img src={src} alt={`${project.title} image ${i + 1}`} className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
                </button>
              </div>
            ))}
          </div>

          {/* Fullscreen image modal */}
          {selectedImage && (
            <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/90 p-6" onClick={() => setSelectedImage(null)}>
              <div className="relative mx-auto max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={() => setSelectedImage(null)} aria-label="Close image" className="absolute right-2 top-2 z-80 pointer-events-auto rounded-full bg-black/60 p-3 text-white">Close</button>
                <img src={selectedImage} alt="Project full preview" loading="eager" className="max-h-[90vh] w-full object-contain rounded-lg" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
