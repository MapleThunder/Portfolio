/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
import "./styles/layout.css";

const LayoutWrapper = styled.div`
  background-color: var(--bg);
  color: var(--textNormal);
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;
const MainLayout = styled.main`
  /* margin: 1rem auto; */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <LayoutWrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MainLayout>{children}</MainLayout>
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
