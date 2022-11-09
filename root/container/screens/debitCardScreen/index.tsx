import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../../assets/Images';
import styles from './styles';

function DebitCardScreen({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerComponent}>
        <Text style={styles.headerTitle}>Debit Card</Text>
        <FastImage
          source={Images.companyLogo}
          style={styles.headerLogo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </SafeAreaView>
  );
}

export default DebitCardScreen;
