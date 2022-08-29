import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/auth";
import { DataGridProvider } from "./context/dataGrid";
import "./config/firebase-config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <DataGridProvider>
        <App />
      </DataGridProvider>
    </AuthProvider>
  </React.StrictMode>
);
