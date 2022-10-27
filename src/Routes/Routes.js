import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Checkout from "../Components/Pages/Checkout/Checkout";
import Blog from "../Components/Pages/Blog/Blog";
import Category from "../Components/Pages/Category/Category";
import AllCourses from "../Components/Pages/Courses/AllCourses";
import Courses from "../Components/Pages/Courses/Courses";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Signup from "../Components/Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoute>
            <Courses></Courses>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <AllCourses></AllCourses>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/courses"),
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
    loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
  },

  { path: "*", element: <h1> 404 This page can't found</h1> },
]);
