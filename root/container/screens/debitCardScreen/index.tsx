import React from 'react';
import {View, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../assets/Images';
import styles from './styles';

function DebitCardScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <FastImage
        source={Images.companyLogo}
        style={{height: 20, width: 20}}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
}

export default DebitCardScreen;
