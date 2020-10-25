import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import "./styles/ToggleStyles.css";

export const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div>
          <input
            name="checkbox"
            className="switch"
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "light" : "dark")}
            checked={theme === "light"}
          />
        </div>
      )}
    </ThemeToggler>
  );
};
