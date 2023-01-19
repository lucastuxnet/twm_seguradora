import { createBrowserRouter } from "react-router-dom";
import Client from "./page/Client";
import ErrorPage from "./page/Error";
import Home from "./page/Home";
import Product from "./page/Product";
import Root from "./page/Root";
import ServiceOrder from "./page/ServiceOrder";
import ServiceType from "./page/ServiceType";
import Technician from "./page/Technician";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/client",
        element: <Client />,
      },
      {
        path: "tecnico",
        element: <Technician />,
      },
      {
        path: "tipo-servico",
        element: <ServiceType />,
      },
      {
        path: "ordem-servico",
        element: <ServiceOrder />,
      },
    ],
  },
]);
