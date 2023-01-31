import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CounterContextProvider } from "./contexts/CounterContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <CounterContextProvider>
            <App />
        </CounterContextProvider>
    </React.StrictMode>,
);
