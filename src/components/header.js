import PropTypes from "prop-types";
import React from "react";
import Navbar from "./navbar";

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Navbar title={siteTitle} />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
