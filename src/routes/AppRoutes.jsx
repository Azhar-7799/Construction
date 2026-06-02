import { lazy } from 'react';
import { Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const Services = lazy(() => import('../pages/Services.jsx'));
const ServiceDetail = lazy(() => import('../pages/ServiceDetail.jsx'));
const Projects = lazy(() => import('../pages/Projects.jsx'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail.jsx'));
const LiveProjects = lazy(() => import('../pages/LiveProjects.jsx'));
const Testimonials = lazy(() => import('../pages/Testimonials.jsx'));
const Careers = lazy(() => import('../pages/Careers.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const Blog = lazy(() => import('../pages/Blog.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));
const MasterAzhar = lazy(() => import('../pages/MasterAzhar.jsx'));

const AppRoutes = () => [
  <Route key="home" index element={<Home />} />,
  <Route key="about" path="about" element={<About />} />,
  <Route key="services" path="services" element={<Services />} />,
  <Route key="service-detail" path="services/:slug" element={<ServiceDetail />} />,
  <Route key="projects" path="projects" element={<Projects />} />,
  <Route key="project-detail" path="projects/:slug" element={<ProjectDetail />} />,
  <Route key="live-projects" path="live-projects" element={<LiveProjects />} />,
  <Route key="testimonials" path="testimonials" element={<Testimonials />} />,
  <Route key="careers" path="careers" element={<Careers />} />,
  <Route key="blog" path="blog" element={<Blog />} />,
  <Route key="contact" path="contact" element={<Contact />} />,
  <Route key="master" path="master-azhar" element={<MasterAzhar />} />,
  <Route key="notfound" path="*" element={<NotFound />} />
];

export default AppRoutes;
