import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/chakra';
import { DashboardLayout, DefaultLayout } from '@/chakra/layouts';

import { ScaffoldProvider } from '@/chakra/contexts/scaffold-context';
import { LocalDataProvider } from '@/contexts/local-data-context';
import MessageRouter from '@/components/message-router';
import ErrorBoundary from '@/components/error-boundary';
import "@fontsource/yeseva-one/index.css";
import "@fontsource/merriweather-sans/index.css";

const App = ({ Component, pageProps, router }) => {
  const isDashboard = router.asPath.includes('dashboard');

  return (
    <ChakraProvider resetCSS theme={theme}>
      <ErrorBoundary>
        <LocalDataProvider>
          <ScaffoldProvider
          // provides user-context, error-context, toast-context
          >
            <MessageRouter asPath={router.asPath}>
              <DefaultLayout>

                <Component {...pageProps} />

              </DefaultLayout>
            </MessageRouter>
          </ScaffoldProvider>
        </LocalDataProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
};

export default App;
