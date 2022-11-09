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
    marginTop: 15,
    fontFamily: Fonts.boldAvenir,
    marginHorizontal: AppDimensions.horizontalSpace,
  },
  headerLogo: {
    height: 25,
    width: 25,
  },
  backIcon: {
    height: 25,
    width: 25,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: AppDimensions.horizontalSpace,
    marginTop: 40,
    paddingTop: 32,
  },
  weeklyContain: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  weeklyText: {
    fontSize: FontSize.medium,
    fontFamily: Fonts.mediumAvenir,
    marginLeft: 12,
  },
  indicatorIcon: {
    height: 16,
    width: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderColor: Colors.brandGrey,
    paddingBottom: 10,
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
    fontFamily: Fonts.boldAvenir,
  },
  calanderWeekText: {
    fontSize: FontSize.customThirteen,
    fontFamily: Fonts.regularAvenir,
    color: Colors.textGrey,
    marginTop: 12,
    marginBottom: 32,
  },

  saveButton: {
    height: 56,
    width: 300,
    backgroundColor: Colors.brandGreen,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 24,
  },
  saveText: {
    fontSize: FontSize.large,
    fontFamily: Fonts.demiBoldAvenir,
    color: Colors.white,
  },
  moneyPlaceHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
