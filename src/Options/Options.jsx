import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import T from '../i18n/T';

const OptionsDiv = styled.div`
  margin: 30px auto 30px;
  border: 0;
  padding: 0 0 0 calc(90px + 5vw);
  font-size: 24px;
  text-align: center;
 
 label {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  @media (max-width: 780px) {
    margin-left: 0;
    margin-right: 0;
    padding: 0 80px 0 0;
    text-align: left;
  }

`;


const Options = ({ advanced, toggleAdvanced }) => (
  <OptionsDiv>
    <legend className="hidden"><T>Options</T></legend>
    <input type="checkbox" id="showAdvanced" checked={advanced} onChange={toggleAdvanced} />
    <label htmlFor="showAdvanced"><T>Show less common lifecycles</T></label>
  </OptionsDiv>
);

Options.propTypes = {
  advanced: PropTypes.bool,
  toggleAdvanced: PropTypes.func.isRequired,
};

export default Options;
