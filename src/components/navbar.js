import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Burger from "./burger";

const Nav = styled.nav`
  width: 100%;
  height: var(--headerHeight);
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a.logo {
    font-size: var(--h2);
    font-family: var(--headingFont);
    color: white;
    text-decoration: none;
    line-height: 2.5rem;
    border: solid 2px transparent;

    &:hover,
    &:focus {
      background-color: var(--accent);
      border: solid 2px var(--accent);
      color: var(--black);
    }
  }
`;

const Navbar = ({ title }) => {
  return (
    <Nav>
      <Link to="/" className="logo">
        {title}
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;
