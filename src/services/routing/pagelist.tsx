import { RouteObject } from 'react-router';

import ErrorBoundary from 'pages/ErrorBoundary';
import Home from 'pages/Home';
import About from 'pages/About';

export const pages: RouteObject[] = [
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
];
