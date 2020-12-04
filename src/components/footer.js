import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  .copyright {
    font-size: var(--textSmall);
    color: var(--textColour);
  }
`;

const Footer = ({ siteTitle }) => {
  return (
    <StyledFooter>
      <p className="copyright">&copy; Niko Bentley 2020</p>
    </StyledFooter>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
