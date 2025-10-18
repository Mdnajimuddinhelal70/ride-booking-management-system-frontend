import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AboutUs from "@/pages/AboutUs";
import AccountStatusPage from "@/pages/AccountStatusPage";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import FeaturesPage from "@/pages/FeaturesPage";
import Homepage from "@/pages/Homepage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { driverSidebarItems } from "./driverSidebarItems";
import { riderSidebarItems } from "./riderSidebarItems";

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
      {
        Component: AccountStatusPage,
        path: "/account-status",
      },
    ],
  },

  // Layou for admin driver rider
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [...generateRoutes(adminSidebarItems)],
  },
  {
    Component: DashboardLayout,
    path: "/rider",
    children: [...generateRoutes(riderSidebarItems)],
  },
  {
    Component: DashboardLayout,
    path: "/driver",
    children: [...generateRoutes(driverSidebarItems)],
  },
]);
