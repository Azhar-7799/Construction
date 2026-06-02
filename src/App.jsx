import { Suspense } from 'react';
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
        <Suspense fallback={<div className="min-h-screen grid place-items-center bg-crown-dark text-white">Loading…</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
