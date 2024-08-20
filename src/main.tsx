import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { SmoothScroll } from "./providers/SmoothScroll/index.ts";
import App from "./App.tsx";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>,
);
