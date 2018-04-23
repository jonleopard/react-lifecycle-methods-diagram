import React, { StrictMode } from 'react';
import { render } from 'react-dom';

//import './index.less';
import globalStyles from './globalStyles.js';

import Root from './Root';

render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('react-container'),
);
