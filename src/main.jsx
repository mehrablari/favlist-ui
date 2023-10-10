import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { register } from 'swiper/element/bundle';

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
      <App />
    </HelmetProvider>
  // <React.StrictMode>
    
  // </React.StrictMode>
);
register();
// Register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    // Try to register the service worker.
    try {
      let reg;

      if (import.meta.env?.DEV) {
        reg = await navigator.serviceWorker.register("/sw.js", {
          type: "module",
        });
      } else {
        reg = await navigator.serviceWorker.register("/sw.js");
      }

      console.log("Service worker registered! 😎", reg);
    } catch (err) {
      console.log("😥 Service worker registration failed: ", err);
    }
  });
}

navigator.vibrate =
  navigator.vibrate ||
  navigator.webkitVibrate ||
  navigator.mozVibrate ||
  navigator.msVibrate;

if (navigator.vibrate) {
  // vibration API supported
  navigator.vibrate(100);
}
