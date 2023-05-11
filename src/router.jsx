import React from "react";
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import LandingPage from "./pages/2Landing/LandingPage";
import AboutMePage from "./pages/3Aboutme/AboutMePage";
import TechnologyStackPage from "./pages/4Technology/TechnologyStackPage";
import ProjectsPage from "./pages/5ProjectsP/ProjectsPage";
import ContactPage from "./pages/6Contact/ContactPage";
import LayoutInfo from "./Layouts/LayoutInfo";
import LayoutProjects from "./Layouts/LayoutProjects";
import PresupuestoAppPage from "./pages/5ProjectsP/Pages/PresupuestoAppPage";
import CrmHospitalPage from "./pages/5ProjectsP/Pages/CrmHospitalPage/CrmHospitalPageIndex";
import CrmPacientePage from "./pages/5ProjectsP/Pages/CrmPacientePage/CrmPacientePageIndex";

const router = createHashRouter([
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
  {
    path: "/projects",
    element: <LayoutProjects />,
    children: [
      {
        path: "/projects/presupuesto-app",
        element: <PresupuestoAppPage />,
      },
      {
        path: "/projects/crm-hospital",
        element: <CrmHospitalPage />,
      },
      {
        path: "/projects/crm-paciente",
        element: <CrmPacientePage />,
      },
    ],
  },
]);

export default router;
