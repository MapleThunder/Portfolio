import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { COLOURS } from "../styles";

const FooterWrapper = styled.footer`
  background: ${COLOURS.bdazzledBlue};
  height: 100px;
  width: 100%;
  bottom: 0;
`;

const Footer = ({ siteTitle }) => {
  return <footer></footer>;
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
