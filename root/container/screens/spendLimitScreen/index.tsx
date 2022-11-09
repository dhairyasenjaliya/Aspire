import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Images} from '../../../assets/Images';
import {Colors} from '../../../utils/colors';
import styles from './styles';

function SpendLimitScreen({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerComponent}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FastImage
            source={Images.backIcon}
            style={styles.backIcon}
            resizeMode={FastImage.resizeMode.contain}
            tintColor={Colors.white}
          />
        </TouchableOpacity>
        <FastImage
          source={Images.companyLogo}
          style={styles.headerLogo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <Text style={styles.headerTitle}>Spending limit</Text>
      <View style={styles.mainContainer}>
        <View style={styles.weeklyContain}>
          <FastImage
            source={Images.indicatorIcon}
            style={styles.indicatorIcon}
            resizeMode={FastImage.resizeMode.contain}
            tintColor={Colors.brandDarkBlue}
          />
          <Text style={styles.weeklyText}>
            Set a weekly debit card spending limit
          </Text>
        </View>

        <View style={styles.amountContainer}>
          <View style={styles.balancePlaceholder}>
            <View>
              <Text style={styles.dollarSymbole}>S$</Text>
            </View>
          </View>
          <Text style={styles.amountStyle}>3,000</Text>
        </View>

        <Text style={styles.calanderWeekText}>
          Here weekly means the last 7 days - not the calendar week
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SpendLimitScreen;
