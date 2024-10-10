// pages/_app.js

import * as React from 'react';
import '../src/App.css'; // Import global CSS here

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

