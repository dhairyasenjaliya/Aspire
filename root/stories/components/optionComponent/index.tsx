import React from 'react';
import {View, Text, Switch, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

function OptionCompoment(_props: any) {
  const {icon, title, subTitle, isToggle, onPress} = _props;
  let defineComponentWidth = isToggle ? '75%' : '90%';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        style={styles.flexRow}>
        <View style={styles.firstComponent}>
          <FastImage
            source={icon}
            style={styles.imageContain}
            resizeMode={'contain'}
          />
        </View>
        <View style={[styles.secondComponent, {width: defineComponentWidth}]}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
      {isToggle ? <Switch style={styles.switchSize} /> : null}
    </View>
  );
}

export default OptionCompoment;
