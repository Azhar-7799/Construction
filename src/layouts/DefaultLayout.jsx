import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';

const DefaultLayout = () => (
  <div className="relative min-w-0 overflow-x-hidden bg-crown-dark text-white">
    <Header />
    <ScrollToTop />
    <main className="relative z-10 pt-[3.75rem] sm:pt-16">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default DefaultLayout;
