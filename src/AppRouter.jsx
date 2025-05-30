import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "./App";
import Weather from "./Weather";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,       
    children: [
      {
        index: true,
        element: <App />,       
      },
      {
        path: "weather/:capital",
        element: <Weather />,   
      },
    ],
  },
]);
