import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../../assets/Images';
import CardComponent from '../../../stories/components/cardComponent';
import OptionCompoment from '../../../stories/components/optionComponent';
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

      <ScrollView style={styles.scrollContain}>
        <CardComponent />
        <OptionCompoment
          icon={Images.insightIcon}
          title={'Top-up account'}
          subTitle={'Deposit money to your account to use with card'}
          isToggle
        />
        <OptionCompoment
          icon={Images.indicatorIcon}
          title={'Weekly spending limit'}
          subTitle={'You haven’t set any spending limit on card'}
          isToggle
        />
        <OptionCompoment
          icon={Images.natureIcon}
          title={'Freeze card'}
          subTitle={'Your debit card is currently active'}
          isToggle
        />
        <OptionCompoment
          icon={Images.cardIcon}
          title={'Get a new card'}
          subTitle={'This deactivates your current debit card'}
          isToggle
        />
        <OptionCompoment
          icon={Images.transferIcon}
          title={'Deactivated cards'}
          subTitle={'Your previously deactivated cards'}
          isToggle
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default DebitCardScreen;
