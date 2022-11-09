// Import Screens

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import DebitCardScreen from '../container/screens/debitCardScreen';
import SpendLimitScreen from '../container/screens/spendLimitScreen';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SpendLimitScreen" component={SpendLimitScreen} />
        <Stack.Screen name="DebitCardScreen" component={DebitCardScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
