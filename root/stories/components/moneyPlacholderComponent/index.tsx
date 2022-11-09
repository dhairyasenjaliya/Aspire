import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

function MoneyplaceholderComponent(_props: any) {
  const {amount, press} = _props;

  return (
    <TouchableOpacity onPress={press} style={styles.container}>
      <Text style={styles.amountText}>{'S$ ' + amount}</Text>
    </TouchableOpacity>
  );
}

export default MoneyplaceholderComponent;
