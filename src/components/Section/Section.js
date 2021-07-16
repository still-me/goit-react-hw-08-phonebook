import React from "react";
import PropTypes from "prop-types";

import "./Section.scss";

const Section = ({ title, children }) => (
  <section className="section">
    <div className="container">
      <h2 className="section__title">{title}</h2>
      {children}
    </div>
  </section>
);

Section.defaultProps = {
  children: null,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
