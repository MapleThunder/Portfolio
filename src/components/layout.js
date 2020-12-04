import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/normalize.css";
import "../styles/main.css";
import "../styles/style.css";

const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: calc(4rem + var(--headerHeight));

  main {
    padding: calc(4rem + var(--headerHeight)) var(--containerPadding);

    @media only screen and (min-width: 800px) {
      padding: calc(4rem + var(--headerHeight)) var(--containerPadding);
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header siteTitle="NB" />
      <main id="main-content" className="layout">
        {children}
      </main>
      <Footer />
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
