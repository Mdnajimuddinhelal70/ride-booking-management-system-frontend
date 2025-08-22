import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import FeaturesPage from "@/pages/FeaturesPage";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },
      {
        Component: Register,
        path: "/register",
      },
      {
        Component: Login,
        path: "/login",
      },
      {
        Component: AboutUs,
        path: "/about",
      },
      {
        Component: FeaturesPage,
        path: "/feature",
      },
    ],
  },
]);
