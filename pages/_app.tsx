/* istanbul ignore file */
import React from 'react';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';

import './styles.css';

export default function App({
  Component,
  pageProps: pageProps,
}: AppProps) {
  const theme = createTheme({
    palette: {
      // neutral: {
      //   main: '#64748B',
      //   contrastText: '#fff',
      // },
      // blue: {
      //   main: '#2196f3',
      // },
      // black: {
      //   main: '#000',
      // },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
