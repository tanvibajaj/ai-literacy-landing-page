import { createRoot } from "react-dom/client";
import App from "./App";

// Combined styles - VPDS + Tailwind processed together via postcss-import
import "./vpds-styles.css";

createRoot(document.getElementById("root")!).render(<App />);
