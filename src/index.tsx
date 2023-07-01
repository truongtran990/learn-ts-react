import { createRoot } from "react-dom/client";

import App from "./components/App";

// Get the element that will render react app
const container = document.getElementById("root");
const root = createRoot(container!);

// Render react app
root.render(<App />);
