/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Header from "../compnents/navbar/index";
import Footer from "../compnents/footer/index";
const Onboard = lazy(() => import("../screens/onbording/index"));
const Dashboard = lazy(() => import("../screens/home/index"));

const Router = () => {
  const location = useLocation();
  const exclutedPath = [
    "/onbording",
    "/",

  ];
 

  return (
    <>
    {!exclutedPath.includes(location.pathname) && <Header />}
      <Suspense
        fallback={
          <div className="lazy_spiner">
            <Spinner animation="grow" variant="success" />
          </div>
        }
      >
        {useRoutes([
          {
            path: "/",
            element: <Onboard />,
          },
          {
            path: "/onbording",
            element: <Onboard />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ])}
      </Suspense>
      {!exclutedPath.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Router;
