import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import styled from "styled-components";
import { BsSun, BsMoon } from "react-icons/bs";

const Toggle = styled.div`
  display: flex;
  align-items: center;

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: var(--textColour);
    border-radius: 20px;

    &::after {
      content: "";
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: var(--primary);
      top: 1px;
      left: 1px;
      transition: all 0.3s;
    }
  }

  .checkbox:checked + .switch::after {
    left: 20px;
  }
  .checkbox:checked + .switch {
    background-color: var(--accent);
  }
  .checkbox {
    display: none;
  }
  svg {
    margin-right: 5px;
    &.yellow {
      color: var(--accent);
    }
  }
`;

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <Toggle>
          {theme === "dark" ? <BsMoon className="yellow" /> : <BsSun />}
          <input
            id="toggle"
            type="checkbox"
            className="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <label htmlFor="toggle" className="switch"></label>
        </Toggle>
      )}
    </ThemeToggler>
  );
};

export default ThemeToggle;
