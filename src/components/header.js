import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { COLOURS } from "./styles";

const HeaderWrapper = styled.header`
  background: ${COLOURS.bdazzledBlue};
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 80%;
  padding: 1rem;
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .home-link {
    margin: 0;

    a {
      font-size: 1.25rem;
      color: white;
      text-decoration: none;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <div className="home-link">
        <Link to="/">{siteTitle}</Link>
      </div>
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
