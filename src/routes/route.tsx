import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import Protected from "./Protected";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

const CustomRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar></Navbar>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>,
        },
        {
          element: <Protected></Protected>,
          children: [
            {
              path: "/page2",
              element: <Page2></Page2>,
            },
            {
              path: "/page3",
              element: <Page3></Page3>,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default CustomRoute;
