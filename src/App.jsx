import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import { AnimatePresence, motion } from 'framer-motion';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      {AppRoutes()}
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="app"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="min-h-screen bg-crown-dark text-white"
      >
        <RouterProvider router={router} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
