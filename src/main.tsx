import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { SmoothScroll } from "./providers/SmoothScroll/index.ts";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>,
);
