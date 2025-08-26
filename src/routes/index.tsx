import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AboutUs from "@/pages/AboutUs";
import AddRide from "@/pages/Admin/AddRide";
import UserManagement from "@/pages/Admin/UserManagement";
import ContactPage from "@/pages/ContactPage";
import AcceptRide from "@/pages/Driver/AcceptRide";
import FAQPage from "@/pages/FAQPage";
import FeaturesPage from "@/pages/FeaturesPage";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import RequestRide from "@/pages/Rider/RequestRide";
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
      {
        Component: ContactPage,
        path: "/contact",
      },
      {
        Component: FAQPage,
        path: "/faq",
      },
    ],
  },

  // Layou for admin driver rider
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [
      {
        Component: AddRide,
        path: "add-ride",
      },
      {
        Component: UserManagement,
        path: "usermanagement",
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/rider",
    children: [
      {
        Component: RequestRide,
        path: "request-ride",
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/driver",
    children: [
      {
        Component: AcceptRide,
        path: "accept-ride",
      },
    ],
  },
]);
