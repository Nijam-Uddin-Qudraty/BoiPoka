import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/home/Home';
import Book_details from './components/Books/Book_details';
import Listed_books from './components/listed books/Listed_books';
import Read_books from './components/listed books/Read_books';
import Wishlist from './components/listed books/Wishlist';

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
        element: <Listed_books></Listed_books>,
        // children: [
        //   {
        //     path: "/read_books",
        //     element: <Read_books></Read_books>
        //   },
        //   {
        //     path: "/wishlist",
        //     element: <Wishlist></Wishlist>
        //   }

        // ]
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
      },
      {
        path: "/book/:bookId",
        element: <Book_details></Book_details>,
        loader:()=>fetch("/booksData.json")
      },
      
      
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
