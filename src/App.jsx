import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./layout";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";


import ErrorBoundary from "./component/ErrorBoundry";
import Intro from "./component/intro";
import PageLoader from "./component/pageLoader";
import { projects } from "./component/projectsData";
import Projects from "./pages/projects";
import Wildcard from "./pages/wildcard";

const ProjectDetail = lazy(() => import("./pages/projectDetail"));

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="intro" element={<Intro />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="projects"
        element={
          <ErrorBoundary>
            <Projects />
          </ErrorBoundary>
        }
      />
      <Route
        path="/projects/:id"
        element={
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />} >
            <ProjectDetail projects={projects} />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<Wildcard />} />
    </Route>,
  ),
);

export default AppRouter;
