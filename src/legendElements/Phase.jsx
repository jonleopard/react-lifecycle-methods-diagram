import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mergeClassNames from 'merge-class-names';

import T from '../i18n/T';

const PhaseDiv = styled.div`
  margin-top: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  &:not(&--last) {
    border-bottom: 2px dotted black;
  }

  h3 {
    font-weight: 400;
  }

  p {
    max-width: 10em;
    margin: 5px auto 10px auto;
  }

`;


export default class Phase extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    last: PropTypes.bool,
    name: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    rowspan: PropTypes.number,
  };

  render() {
    const {
      children, last, name, row, rowspan,
    } = this.props;

    return (
      <PhaseDiv
        className={mergeClassNames('Phase', last && 'Phase--last')}
        style={{
          gridColumn: 1,
          gridRow: `${row * 3} / ${rowspan ? `span ${rowspan * 3}` : 'auto'}`,
        }}
      >
        <h3><T name={name}>{'“{name} phase”'}</T></h3>
        <p><T>{children}</T></p>
      </PhaseDiv>
    );
  }
}
