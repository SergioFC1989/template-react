import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Grommet } from 'grommet';
import styled from 'styled-components';
import reportWebVitals from './reportWebVitals';

import { Page } from 'grommet';

import App from './App';
import theme from './theme'


const StyledGrommet = styled(Grommet)`
  min-height: 100vh;
  min-width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin: 0;
  padding: 0;
  background: #E8E8E8;
  overflow: hidden;
  border-radius: 5px;
`;

ReactDOM.render(
  <React.StrictMode>
    <StyledGrommet theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledGrommet>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();