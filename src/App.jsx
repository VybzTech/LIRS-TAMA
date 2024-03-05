import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Confirmation from "./Components/Confirmation";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Completed",
          element: <Confirmation />,
        },
        {
          path: "*",
          element: <Navigate to={"/"} replace />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
