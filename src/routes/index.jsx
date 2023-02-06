/* eslint-disable linebreak-style */
import React, { lazy, Suspense } from 'react';
import LoadingPage from '../components/besar/LoadingPage';

const Home = lazy(() => import('../pages/Home'));
const router = [
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingPage />}>
        <Home />
      </Suspense>
    ),
  },
];

export default router;
