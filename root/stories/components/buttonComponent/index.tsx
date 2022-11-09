import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

function ButtonComponent(_props: any) {
  const {title, buttonStyle, textStyle, press} = _props;

  return (
    <TouchableOpacity onPress={press} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;
