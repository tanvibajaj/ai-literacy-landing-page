import { createRoot } from "react-dom/client";
import App from "./App";

// Tailwind styles
import "./vpds-styles.css";

// VPDS CSS is loaded via static link tags in index.html to bypass PostCSS

createRoot(document.getElementById("root")!).render(<App />);
