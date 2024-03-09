import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";

const LandingWrapper = ({ children }) => {
  return (
    <div className="relative w-full h-full min-h-lvh bg-black">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

LandingWrapper.propTypes = {
    children: PropTypes.node,
  };

export default LandingWrapper;
