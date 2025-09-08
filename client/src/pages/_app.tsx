import '@/styles/globals.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';
import { Box, ThemeProvider } from '@mui/material';

import Header from '@/components/common/header/Header';
import Footer from '@/components/common/footer/Footer';
import theme from '@/styles/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <ThemeProvider theme={theme}>
        <Header />
        <Box component="main" flexGrow={1}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}
