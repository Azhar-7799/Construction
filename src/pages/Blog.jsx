import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

const Blog = () => (
  <>
    <SEO
      title="Blog | Crown Home Spaces"
      description="Explore insights on Hyderabad construction, interior trends, turnkey delivery, and premium project planning from Crown Home Spaces."
      canonical="https://crownhomespaces.com/blog"
      keywords="Construction Blog Hyderabad, Interior Trends Hyderabad, Project Delivery Insights Hyderabad, Turnkey Project Blog Hyderabad"
    />
    <section className="relative overflow-hidden bg-crown-dark px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-xl sm:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-crown-gold">Blog & insights</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Future-proof your next construction and interior project.</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-crown-beige/90">
          Our future blog section is designed to deliver premium content on Hyderabad construction trends, interior strategy, turnkey execution, and local project planning. Check back soon for deep-dive articles, case studies, and expert commentary tailored for property owners, developers, and design leaders.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[32px] border border-white/10 bg-black/50 p-6 transition hover:border-crown-gold/30">
            <h2 className="text-2xl font-semibold text-white">How to Choose the Right Construction Partner in Hyderabad</h2>
            <p className="mt-4 text-sm leading-7 text-crown-beige/90">Learn how to evaluate experience, local approvals, and quality standards for residential and commercial projects across Kondapur and Hitech City.</p>
          </article>
          <article className="rounded-[32px] border border-white/10 bg-black/50 p-6 transition hover:border-crown-gold/30">
            <h2 className="text-2xl font-semibold text-white">Interior Material Trends for Premium Hyderabad Homes</h2>
            <p className="mt-4 text-sm leading-7 text-crown-beige/90">Discover the best finishes for sustainable luxury, hospitality interiors, and commercial spaces in Hyderabad’s unique climate.</p>
          </article>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-crown-beige/80">This space is being prepared for future content, designed to support SEO, lead generation, and local industry authority.</p>
          <Link to="/contact" className="inline-flex rounded-full bg-crown-gold px-6 py-3 text-sm font-semibold text-crown-dark transition hover:bg-white">Request a Consultation</Link>
        </div>
      </div>
    </section>
  </>
);

export default Blog;
