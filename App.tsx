import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/components/navigation/Navigation';
import configureStore from './src/store/configureStore';
import getTheme from './src/utils/theme/theme';
import { StatusBar } from 'expo-status-bar';

import './src/utils/i18n/i18n';
import { Fragment } from 'react';

const App = () => {
  const { store, persistor } = configureStore();
  const queryClient = new QueryClient();

  const theme = getTheme();

  return (
    <Fragment>
      <StatusBar style="inverted" />
      <ThemeProvider {...{ theme }}>
        <StoreProvider {...{ store }}>
          <PersistGate {...{ persistor }}>
            <QueryClientProvider client={queryClient}>
              <Navigation />
            </QueryClientProvider>
          </PersistGate>
        </StoreProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
