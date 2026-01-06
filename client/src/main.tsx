import { createRoot } from "react-dom/client";
import App from "./App";

// VPDS styles must be imported as JavaScript imports (per Visa docs)
import '@visa/nova-styles/styles.css';
import '@visa/nova-styles/themes/visa-light/index.css';

// Then Tailwind
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
