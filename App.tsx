import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as MobXProvider } from 'mobx-react';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { useStore } from './src/stores/appStore';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  const store = useStore();

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MobXProvider store={store}>
          <>
            <StatusBar barStyle="light-content" backgroundColor="#000" />
            <AppNavigator />
          </>
        </MobXProvider>
    </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
