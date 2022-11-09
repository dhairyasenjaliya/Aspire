import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {AppDimensions, FontSize} from '../../../utils/helper';

export default StyleSheet.create({
  container: {
    marginHorizontal: AppDimensions.horizontalSpace,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
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
  imageContain: {
    height: 32,
    width: 32,
  },
  firstComponent: {
    width: '10%',
  },
  secondComponent: {
    marginLeft: 10,
  },
  switchSize: {
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
  },
});
