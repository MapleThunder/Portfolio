/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";
import "../styles/normalize.css";
import "../styles/main.css";
import "../styles/style.css";
import { COLOURS } from "../styles";

const StyledLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  background-color: ${COLOURS.background};
  color: ${COLOURS.fontColour};

  #main-content {
    width: 100%;
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 0 2.5rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle="Niko Bentley" />
      <main id="main-content" className="layout">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
