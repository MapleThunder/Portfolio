import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

import "./styles/ToggleStyles.scss";

export const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div class="toggleWrapper">
          <input
            type="checkbox"
            class="dn"
            id="dn"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <label for="dn" class="toggle">
            <span class="toggle__handler">
              <span class="crater crater--1"></span>
              <span class="crater crater--2"></span>
              <span class="crater crater--3"></span>
            </span>
            <span class="star star--1"></span>
            <span class="star star--2"></span>
            <span class="star star--3"></span>
            <span class="star star--4"></span>
            <span class="star star--5"></span>
            <span class="star star--6"></span>
          </label>
        </div>
      )}
    </ThemeToggler>
  );
};
