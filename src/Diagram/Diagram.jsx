import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Mounting from '../Mount/Mounting';
import Updating from '../Updating';
import Unmounting from '../Mount/Unmounting';

const Diagram = ({ advanced }) => (
  <Fragment>
    <h2 className="hidden">Component lifecycle</h2>
    <Mounting advanced={advanced} />
    <Updating advanced={advanced} />
    <Unmounting advanced={advanced} />
  </Fragment>
);

Diagram.propTypes = {
  advanced: PropTypes.bool,
};

export default Diagram;
