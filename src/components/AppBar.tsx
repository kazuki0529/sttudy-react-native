import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AppBar extends React.Component {
  render() {
    return (
      <View style={styles.appBar}>
        <View>
          <Text style={styles.appBarTitle}>MEMOT</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	appBar: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 78,
		paddingTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#265366',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
		zIndex: 10
	},
	appBarTitle: {
		color: '#fff',
		fontSize: 18,
	},
});

export default AppBar;