import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function OptionCompoment(_props: any) {
  const {icon, title, subTitle} = _props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.subTitleText}>{subTitle}</Text>
      </View>
    </View>
  );
}

export default OptionCompoment;
