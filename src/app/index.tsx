import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './Dashboard';

import '../styles/global.css';

const router = createBrowserRouter([
  {
    path: '/painel',
    element: <Dashboard />,
  },
]);


const App = ():JSX.Element => (
  <RouterProvider router={router} />
);

export default App;
