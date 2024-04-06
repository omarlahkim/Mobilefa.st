import React from 'react';
import {Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';

export default function Or() {
  return (
    <View style={styles.OrContainer}>
      <View style={styles.OrDivider} />
      <Text h2>Or</Text>
      <View style={styles.OrDivider} />
    </View>
  );
}

const styles = StyleSheet.create({
  OrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    gap: 15,
  },
  OrDivider: {
    width: 100,
    height: 2,
    backgroundColor: 'black',
  },
});
