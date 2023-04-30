// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import { theme } from './theme.js';
import { ThemeProvider } from 'styled-components';

const root = createRoot(document.getElementById('root'));

root.render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/test-task">
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>
  // </StrictMode>
);
