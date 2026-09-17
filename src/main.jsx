<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
=======
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
>>>>>>> origin/feat/dark_mode
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);

// Unregister any existing service worker that might be causing caching issues in Capacitor
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}


=======
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

>>>>>>> origin/feat/dark_mode
