import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '@flavor/theme';
import Home from './screens/home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
