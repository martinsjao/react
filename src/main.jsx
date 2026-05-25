import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import taskPage from "./pages/TaskPage.jsx";

let router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/tasks",
    element: taskPage(),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
