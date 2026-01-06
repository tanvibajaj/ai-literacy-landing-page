import { createRoot } from "react-dom/client";
import App from "./App";

// Import combined Tailwind + VPDS styles
import "./vpds-styles.css";

createRoot(document.getElementById("root")!).render(<App />);
