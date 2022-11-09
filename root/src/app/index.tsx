import * as React from 'react';
import Navigator from '../../navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </SafeAreaProvider>
  );
}

export default App;
