import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../../assets/Images';
import CardComponent from '../../../stories/components/cardComponent';
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

      <View style={styles.myBalanceContainer}>
        <Text style={styles.myBalanceText}>Available balance</Text>
        <View style={styles.amountContainer}>
          <View style={styles.balancePlaceholder}>
            <View>
              <Text style={styles.dollarSymbole}>S$</Text>
            </View>
          </View>
          <Text style={styles.amountStyle}>3,000</Text>
        </View>
      </View>

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}>
        <CardComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

export default DebitCardScreen;
