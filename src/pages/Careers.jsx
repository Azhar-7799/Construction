import { motion } from 'framer-motion';
import SEO from '../components/SEO.jsx';

const Careers = () => (
  <>
    <SEO title="Careers | Crown Home Spaces" description="Join Crown Home Spaces in Kondapur and contribute to luxury interior design, construction, and architectural projects across Hyderabad." />
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">Careers</p>
          <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">Build your career with a premium construction and design leader.</h1>
          <p className="mt-6 text-lg leading-8 text-crown-beige/90">
            We’re looking for professionals who share our passion for architectural excellence, luxury interiors, and disciplined project delivery.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {[
            { role: 'Project Manager', description: 'Lead delivery across residential and commercial projects with client-facing rigor.' },
            { role: 'Interior Designer', description: 'Create premium space plans, material palettes, and интерьер design documentation.' },
            { role: 'Site Engineer', description: 'Oversee civil, structural, and MEP coordination on active construction sites.' },
            { role: 'Business Development', description: 'Build relationships with developers, architects, and premium homeowners.' }
          ].map((position) => (
            <motion.article key={position.role} whileHover={{ y: -6 }} className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow transition hover:border-crown-gold/30 hover:bg-white/10">
              <h2 className="text-2xl font-semibold text-white">{position.role}</h2>
              <p className="mt-4 text-sm leading-7 text-crown-beige/90">{position.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:crownhomespaces@gmail.com?subject=Career Application" className="rounded-full border border-white/10 bg-crown-gold/10 px-5 py-3 text-sm font-semibold text-crown-gold transition hover:bg-crown-gold/15 hover:text-white">Apply Now</a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 rounded-[32px] border border-white/10 bg-crown-rich/40 p-10 text-crown-beige shadow-glow sm:p-14">
          <h2 className="text-3xl font-semibold text-white">Why work with Crown Home Spaces?</h2>
          <ul className="mt-8 grid gap-5 text-sm leading-7 sm:grid-cols-2">
            <li className="rounded-3xl border border-white/10 bg-white/5 p-5">Collaborative project teams grounded in transparency.</li>
            <li className="rounded-3xl border border-white/10 bg-white/5 p-5">Exposure to luxury interiors, corporate construction, and architecture.</li>
            <li className="rounded-3xl border border-white/10 bg-white/5 p-5">Professional growth with client-facing design and engineering challenges.</li>
            <li className="rounded-3xl border border-white/10 bg-white/5 p-5">A premium brand culture with performance and design leadership.</li>
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default Careers;
