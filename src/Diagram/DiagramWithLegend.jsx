import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Legend from '../Legend';

import Diagram from './Diagram';

const DiagramGrid = styled.div`
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns:
    minmax(86px, auto)
    minmax(144px, auto)
    minmax(75px, auto) minmax(52px, auto) minmax(75px, auto)
    minmax(148px, auto);

  margin: 0 auto;

`;


export default class DiagramWithLegend extends Component {
  static propTypes = {
    advanced: PropTypes.bool,
  };

  render() {
    const { advanced } = this.props;

    return (
      <DiagramGrid>
        <Legend advanced={advanced} />
        <Diagram advanced={advanced} />
      </DiagramGrid>
    );
  }
}
