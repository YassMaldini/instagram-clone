import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './src/components/navigation/Navigation';
import configureStore from './src/store/configureStore';
import getTheme from './src/utils/theme/theme';

import './src/utils/i18n/i18n';

const App = () => {

  const { store, persistor } = configureStore();
  const queryClient = new QueryClient();

  const theme = getTheme();

  return (
    <ThemeProvider {...{ theme }}>
      <StoreProvider {...{ store }}>
        <PersistGate {...{ persistor }}>
          <QueryClientProvider client={queryClient}>
            <BottomSheetModalProvider>
              <Navigation />
            </BottomSheetModalProvider>
          </QueryClientProvider>
        </PersistGate>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;