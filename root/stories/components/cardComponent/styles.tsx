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
    marginTop: 100,
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
  hideNumber: {
    position: 'absolute',
    right: 0,
    backgroundColor: Colors.white,
    top: -25,
    elevation: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
    // borderWidth: 1,
    // zIndex: 2,
  },
  hideComponent: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  eyeLogo: {
    width: 16,
    height: 16,
    marginRight: 6,
  },
  hideCardText: {
    fontFamily: Fonts.demiBoldAvenir,
    color: Colors.brandGreen,
    fontSize: FontSize.regular,
  },
});
