import { createRoot } from "react-dom/client";
import App from "./App";

// Tailwind styles first
import "./vpds-styles.css";

// VPDS styles - inject raw to bypass PostCSS processing
import vpdsStyles from '@visa/nova-styles/styles.css?raw';
import vpdsTheme from '@visa/nova-styles/themes/visa-light/index.css?raw';

// Inject VPDS styles into document
const vpdsStyleEl = document.createElement('style');
vpdsStyleEl.textContent = vpdsStyles + vpdsTheme;
document.head.appendChild(vpdsStyleEl);

createRoot(document.getElementById("root")!).render(<App />);
