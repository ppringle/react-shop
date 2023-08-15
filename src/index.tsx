import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./components/Routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>,
)