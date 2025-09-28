import React, { useEffect } from 'react';

import i18n, { initI18n } from '@i18n';
import { store } from '@store/store';
import { I18nextProvider } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Layout from './src/Layout';

const App = (): React.JSX.Element => {
  useEffect(() => {
    initI18n();
  }, []);

  return (
    <GestureHandlerRootView>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <SafeAreaProvider>
            <Layout />
          </SafeAreaProvider>
        </Provider>
      </I18nextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
