import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router/dom'
import RootLayout from './layout/RootLayout';
import FriendDetails from './pages/FriendDetails/FriendDetails';
import Timeline from './pages/Timeline/Timeline';
import Stats from './pages/Stats/Stats';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <h2>Home</h2>
      },
      {
         index: true,
        element: <FriendDetails></FriendDetails>
      },
       {
        path: "Timeline",
        element: <Timeline></Timeline> 
      },
        {
        path: "Stats",
        element: <Stats></Stats> 
      },
    ],
    errorElement: <NotFoundPage></NotFoundPage>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <RouterProvider router={router} />,
  
  </StrictMode>,
)
