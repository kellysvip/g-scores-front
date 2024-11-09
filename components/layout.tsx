/* istanbul ignore file */
import React from 'react';
import Header from './header';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { SnackbarProvider } from 'notistack';

import vi from '../translations/vi.json';
import { ContentWrapper } from './styled-components';

const messages: { [key: string]: unknown } = { vi };

export default function Layout({ children }: { children: React.ReactNode }) {
  const { locale } = useRouter();

  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <IntlProvider
          locale={locale || 'vi'}
          messages={messages[locale || 'vi'] as Record<string, string>}
        >
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
        </IntlProvider>
      </LocalizationProvider>
    </SnackbarProvider>
  );
}
