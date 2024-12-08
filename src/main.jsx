import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ChangeLog from "./changelog";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChangeLog />
  </StrictMode>
);
