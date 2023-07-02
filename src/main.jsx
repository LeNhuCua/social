import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
import 'tippy.js/dist/tippy.css'; // optional
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);
