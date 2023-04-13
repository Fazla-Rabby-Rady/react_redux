import React from 'react'
import {createBrowserRouter,RouterProvider,Route,Link, Outlet,} from "react-router-dom";
import Navbar from '../layouts/Navbar';
import Home from '../pages/Home';
import BooksView from '../fetaures/books/BooksView';
import AddBook from '../fetaures/books/AddBook';
import EditBook from '../fetaures/books/EditBook';
import Footer from '../layouts/Footer';

const Layout = () => {
    return(
        <div className="">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
        {
            path:'/',
            element:<Home />,
        },
        {
            path:'/show-books',
            element:<BooksView />,
        },
        {
            path:'/add-book',
            element:<AddBook />,
        },
        {
          path:'/edit-book',
          element: <EditBook />

        },
        {
            path:'*',
            element:<Error />,
        },
    ]
  },
  
]);

const Index = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Index