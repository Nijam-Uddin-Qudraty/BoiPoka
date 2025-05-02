import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/listed_books",
        element: <h1>this is listed book section</h1>
      },
      {
        path: "/pages_to_read",
        element: <h1>wishlist</h1>
      },
      {
        path: "/sign_in",
        element: <h2>sign in page</h2>
      },
      {
        path: "/sign_up",
        element: <h1>sign up page</h1>
      }
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
