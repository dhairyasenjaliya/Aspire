import * as React from 'react';
import Navigator from '../../navigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}

export default App;
