import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AppLayout from "./components/AppLayout/AppLayout";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
