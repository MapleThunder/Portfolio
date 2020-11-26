import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "../styles/normalize.css";
import "../styles/main.css";
import "../styles/style.css";

const Main = styled.main`
  padding: calc(2rem + var(--headerHeight)) var(--containerPadding);

  @media only screen and (min-width: 800px) {
    padding: calc(4rem + var(--headerHeight)) var(--containerPadding);
  }
`;

const Layout = ({ children }) => {
  return (
    <Main id="main-content" className="layout">
      {children}
    </Main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
