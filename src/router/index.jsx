import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import DashboardPage from "../pages/DashboardPage";
import EntryPage from "../pages/EntryPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
