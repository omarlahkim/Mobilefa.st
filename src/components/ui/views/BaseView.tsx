import React from 'react';
import {Image, Text} from '@rneui/themed';
import {ComponentProps} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export default function BaseView({description, children}: ComponentProps<any>) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        width={100}
        height={100}
        style={styles.logo}
        source={require('../../../../assets/images/logo.png')}
      />
      <View>
        <Text h1 style={styles.description}>
          {description}
        </Text>
        <Text h4 style={styles.subDescription}>
          No we didn't mistake the word "Faster", Neither "Fast"! 😂
        </Text>
      </View>
      {children}
      <View style={styles.poweredContainer}>
        <Text h4>Powered by: </Text>
        <Image
          width={100}
          height={100}
          style={styles.poweredByImage}
          source={require('../../../../assets/images/digitlift.png')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  poweredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  underlined: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: '#FFBB00',
  },
  poweredByImage: {
    height: 55,
    width: 90,
    resizeMode: 'contain',
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  subDescription: {
    textAlign: 'center',
    paddingVertical: 5,
  },
  logo: {
    height: 55,
    width: 240,
    resizeMode: 'contain',
  },
});
