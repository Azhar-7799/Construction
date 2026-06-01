import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';

const NotFound = () => (
  <>
    <SEO title="Page Not Found | Crown Home Spaces" description="The page you are looking for cannot be found. Return to the luxury interiors home page." />
    <section className="min-h-[calc(100vh-160px)] px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-crown-gold">404</p>
        <h1 className="mt-4 text-6xl font-semibold text-white sm:text-7xl">Page not found</h1>
        <p className="mt-6 text-lg leading-8 text-crown-beige/90">
          The page you are searching for does not exist or has been moved. Explore our services or contact us directly.
        </p>
        <div className="mt-10 inline-flex rounded-full bg-crown-gold px-8 py-4 text-sm font-semibold text-crown-dark transition hover:bg-white">
          <Link to="/">Return Home</Link>
        </div>
      </div>
    </section>
  </>
);

export default NotFound;
