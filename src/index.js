import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App"
import Root from "./routes/root";
import ErrorPage from "./error-page";
import TaskApp from "./components/TaskApp";
import Basic from "./components/Basic/Basic";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "react-context",
                element: <TaskApp />,
            },
            {
                path: "basic",
                element: <Basic />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
