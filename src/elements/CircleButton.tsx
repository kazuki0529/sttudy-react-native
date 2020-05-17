import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Color } from 'csstype';

import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';

interface ICircleButtonProps {
  style: ViewStyle;
  color: Color;
}

class CircleButton extends React.Component<ICircleButtonProps, {}> {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'FontAwesome': fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;

    const bgColor =  color === 'white' ? '#fff' : '#E31676'
    const textColor = color === 'white' ? '#E31676' : '#fff'

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.circleButtonTitle, { color: textColor }]}>
              {this.props.children}
            </Text>
          ) : null
        }
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
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 24,
  },
})

export default CircleButton;
