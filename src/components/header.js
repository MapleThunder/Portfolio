import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { COLOURS } from "./styles";
import { ThemeToggle } from "./themeToggle";

const HeaderWrapper = styled.header`
  background: ${COLOURS.main};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem;
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ThemeToggle />
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
