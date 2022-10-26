import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Blog from "../Components/Pages/Blog/Blog";
import Category from "../Components/Pages/Category/Category";
import AllCourses from "../Components/Pages/Courses/AllCourses";
import Courses from "../Components/Pages/Courses/Courses";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Signup from "../Components/Pages/Signup/Signup";

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
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/courses",
        element: <AllCourses></AllCourses>,
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
  { path: "*", element: <h1> 404 This page can't found</h1> },
]);
