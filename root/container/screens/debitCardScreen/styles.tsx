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
});
