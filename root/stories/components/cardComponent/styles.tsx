import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {AppDimensions, FontSize} from '../../../utils/helper';

export default StyleSheet.create({
  container: {
    height: 220,
    backgroundColor: Colors.brandGreen,
    marginHorizontal: AppDimensions.horizontalSpace,
    borderRadius: 12,
    padding: 24,
  },
  logoContain: {
    width: 74,
    height: 24,
    alignSelf: 'flex-end',
  },
  cardName: {
    fontFamily: Fonts.boldAvenir,
    color: Colors.white,
    fontSize: FontSize.headerSizeSmall,
    marginBottom: 24,
  },
  cardNumber: {
    fontFamily: Fonts.demiBoldAvenir,
    color: Colors.white,
    fontSize: FontSize.large,
    marginBottom: 15,
    letterSpacing: 3,
  },
  secureContain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardValid: {
    fontFamily: Fonts.demiBoldAvenir,
    color: Colors.white,
    fontSize: FontSize.medium,
  },
  cardCVV: {
    fontFamily: Fonts.demiBoldAvenir,
    color: Colors.white,
    fontSize: FontSize.medium,
    marginLeft: 32,
  },
  visaContain: {
    width: 59,
    height: 20,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});
