import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 25
  },
  viewStyle: {
    backgroundColor: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#333333',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2
  }
};

export default Header;
