import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';

function DebitCardScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="SpendLimiScreen"
        onPress={() => navigation.navigate('SpendLimitScreen')}
      />
    </View>
  );
}

export default DebitCardScreen;
