import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import {FontSize} from '../../../utils/helper';

export default StyleSheet.create({
  container: {
    height: 40,
    width: 110,
    backgroundColor: '#rgba(0, 209, 103, 0.1)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountText: {
    color: Colors.brandGreen,
    fontSize: FontSize.medium,
    fontFamily: Fonts.demiBoldAvenir,
  },
});
