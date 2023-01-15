import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Checkout from "../Components/Pages/Checkout/Checkout";
import Blog from "../Components/Pages/Blog/Blog";
import Category from "../Components/Pages/Category/Category";
import AllBooks from "../Components/Pages/Books/AllBooks";
import Books from "../Components/Pages/Books/Books";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Signup from "../Components/Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Admin from "../Components/Pages/Admin/Admin";
import AdminSingleBook from "../Components/Pages/Admin/AdminSingleBook";
import Addbook from "../Components/Pages/Admin/Addbook";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            " https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/category/1"
          ),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            ` https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/books/:id",
        element: <Books></Books>,
        loader: ({ params }) =>
          fetch(
            ` https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/books/${params.id}`
          ),
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            " https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/books"
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/checkout/:id",
    element: (
      <PrivateRoute>
        <Checkout></Checkout>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/books/${params.id}`
      ),
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Admin></Admin>
      </PrivateRoute>
    ),
    loader: () =>
      fetch(
        " https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/books"
      ),
  },
  {
    path: "/adminsinglebook/:id",
    element: (
      <PrivateRoute>
        <AdminSingleBook></AdminSingleBook>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/adminsinglebook/${params.id}`
      ),
  },
  {
    path: "/adminaddbook",
    element: (
      <PrivateRoute>
        <Addbook></Addbook>
      </PrivateRoute>
    ),
    loader: () =>
      fetch(
        "https://b610-lerning-platform-server-side-mdgalibhossai-mdgalibhossain1.vercel.app/books"
      ),
  },

  { path: "*", element: <h1> 404 This page can't found</h1> },
]);
