import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Category from "../Components/Pages/Category/Category";
import Home from "../Components/Pages/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
      },
    ],
  },
]);
