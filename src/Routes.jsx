import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Evesharklanding from "pages/Evesharklanding";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "evesharklanding",
      element: <Evesharklanding />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
