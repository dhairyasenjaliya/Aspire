import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {AppDimensions, FontSize} from '../../../utils/helper';

export default StyleSheet.create({
  container: {
    marginHorizontal: AppDimensions.horizontalSpace,
    marginVertical: 10,
  },
  titleText: {
    fontSize: FontSize.medium,
    fontFamily: Fonts.regularAvenir,
    color: Colors.brandDarkBlue,
  },
  subTitleText: {
    fontSize: FontSize.customThirteen,
    fontFamily: Fonts.regularAvenir,
    color: Colors.textGrey,
  },
});
