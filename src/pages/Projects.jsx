import { projects } from '../data/projects.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

const Projects = () => {

  return (
    <>
    <SEO title="Projects | Crown Home Spaces" description="Explore our luxury construction and interior design project portfolio across Hyderabad." />
    <section className="relative overflow-x-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Project portfolio</p>
          <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Select projects that define our premium quality and architectural craft.</h1>
          <p className="mt-6 text-lg leading-8 text-crown-beige/90">
            A curated collection of residences, corporate builds, outdoor spaces, and smart homes executed with meticulous attention to detail.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.title} to={`/projects/${project.slug}`}>
              <motion.article whileHover={{ y: -6 }} className="group block overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-glow transition hover:border-crown-gold/20 hover:bg-white/10 cursor-pointer">
                <div className="relative h-56 overflow-hidden sm:h-72 md:h-80 lg:h-96">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-flex rounded-full bg-crown-gold/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-crown-gold">{project.category}</span>
                    <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm leading-7 text-crown-beige/90">{project.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-crown-gold group-hover:text-white">
                      View case study
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Projects;
