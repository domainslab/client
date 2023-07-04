import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { pages } from './pagelist';

const router = createBrowserRouter(pages);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
