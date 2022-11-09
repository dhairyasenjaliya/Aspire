import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../../assets/Images';
import styles from './styles';

function CardComponent() {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  );
}

export default CardComponent;
