import { RouteObject } from 'react-router';

import ErrorBoundary from 'pages/ErrorBoundary';
import Home from 'pages/Home';
import StoryBook from 'pages/StoryBook';
import UnderConstruction from 'pages/UnderConstruction';

export const pages: RouteObject[] = [
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    element: <Home />,
  },
  {
    path: '/about',
    element: <UnderConstruction />,
  },
  {
    path: '/contacts',
    element: <UnderConstruction />,
  },
  {
    path: '/contribute',
    element: <UnderConstruction />,
  },
  {
    path: '/developers',
    element: <UnderConstruction />,
  },
  {
    path: '/terms',
    element: <UnderConstruction />,
  },
  {
    path: '/policy',
    element: <UnderConstruction />,
  },
  {
    path: '/storybook',
    element: <StoryBook />,
  },
];
