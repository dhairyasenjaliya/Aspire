import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../assets/Images';
import styles from './styles';

function CardComponent() {
  return (
    <View style={styles.container}>
      <FastImage
        source={Images.aspireIcon}
        style={styles.logoContain}
        resizeMode={'contain'}
      />
      <Text style={styles.cardName}>Mark Henry</Text>
      <Text style={styles.cardNumber}>5647 3411 2413 2020</Text>
      <View style={styles.secureContain}>
        <Text style={styles.cardValid}>Thru: 12/20</Text>
        <Text style={styles.cardCVV}>CVV: 456</Text>
      </View>
      <FastImage
        source={Images.visaIcon}
        style={styles.visaContain}
        resizeMode={'contain'}
      />
      <TouchableOpacity style={styles.hideNumber}>
        <View style={styles.hideComponent}>
          <FastImage
            source={Images.eyeIcon}
            style={styles.eyeLogo}
            resizeMode={'contain'}
          />
          <Text style={styles.hideCardText}>Hide card number</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CardComponent;
