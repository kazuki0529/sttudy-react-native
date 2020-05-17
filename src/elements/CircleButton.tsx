import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Color } from 'csstype';

interface ICircleButtonProps {
  style: ViewStyle;
  color: Color;
}

class CircleButton extends React.Component<ICircleButtonProps, {}> {
  render() {
    const { style, color } = this.props;

    const bgColor =  color == 'white' ? '#fff' : '#E31676'
    const textColor = color == 'white' ? '#E31676' : '#fff'

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        <Text style={[styles.circleButtonTitle, {color: textColor}]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
  },
})

export default CircleButton;
