import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {AppDimensions, FontSize} from '../../../utils/helper';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBlue,
  },
  headerComponent: {
    flexDirection: 'row',
    marginHorizontal: AppDimensions.horizontalSpace,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: FontSize.headerSize,
    color: Colors.white,
    marginTop: 10,
    fontFamily: Fonts.boldAvenir,
  },
  headerLogo: {
    height: 25,
    width: 25,
  },
  myBalanceContainer: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: AppDimensions.horizontalSpace,
    justifyContent: 'center',
    alignContent: 'center',
  },
  myBalanceText: {
    fontSize: FontSize.medium,
    color: Colors.white,
    fontFamily: Fonts.mediumAvenir,
  },
  balancePlaceholder: {
    height: 25,
    width: 40,
    backgroundColor: Colors.brandGreen,
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollarSymbole: {
    fontSize: FontSize.medium,
    color: Colors.white,
    fontFamily: Fonts.boldAvenir,
  },
  amountStyle: {
    fontSize: FontSize.headerSize,
    color: Colors.white,
    fontFamily: Fonts.boldAvenir,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
