import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/2Landing/LandingPage";
import AboutMePage from "./pages/3Aboutme/AboutMePage";
import TechnologyStackPage from "./pages/4Technology/TechnologyStackPage";
import ProjectsPage from "./pages/5ProjectsP/ProjectsPage";
import ContactPage from "./pages/6Contact/ContactPage";
import LayoutInfo from "./Layouts/LayoutInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/page",
    element: <LayoutInfo />,
    children: [
      {
        path: "/page/aboutme",
        element: <AboutMePage />,
      },
      {
        path: "/page/stack",
        element: <TechnologyStackPage />,
      },
      {
        path: "/page/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/page/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
