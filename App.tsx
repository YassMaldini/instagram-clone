import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as StoreProvider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import RootStack from './src/components/navigation/RootStack/RootStack';
import SignIn from './src/components/screens/authentication/SignIn/SignIn';
import authenticationReducer from './src/store/authentication/authenticationReducer';
import configureStore from './src/store/configureStore';
import getTheme from './src/utils/theme/theme';

const App = () => {

  const { store, persistor } = configureStore();
  // const persistConfig = {
  //   key: 'root',
  //   storage: AsyncStorage
  // }
  
  // const allReducers = combineReducers({
  //   authentication: authenticationReducer
  // });

  // const store = createStore(persistReducer(persistConfig, allReducers));
  // const persistor = persistStore(store);
  const queryClient = new QueryClient();

  const theme = getTheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider {...{ theme }}>
        <StoreProvider {...{ store }}>
          <PersistGate {...{ persistor }}>
            <QueryClientProvider client={queryClient}>
              <BottomSheetModalProvider>
                <RootStack />
              </BottomSheetModalProvider>
            </QueryClientProvider>
          </PersistGate>
        </StoreProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;