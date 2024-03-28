import {Image, Text} from '@rneui/themed';
import {ComponentProps} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

export default function BaseView({
  description,
  short_description,
  children,
}: ComponentProps<any>) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        width={100}
        height={100}
        style={{
          height: 55,
          width: 240,
          resizeMode: 'contain',
        }}
        source={require('../../../../assets/images/logo.png')}
      />
      <View>
        <Text h1 style={{textAlign: 'center', paddingHorizontal: 5}}>
          {description}
        </Text>
        <Text h4 style={{textAlign: 'center', paddingVertical: 5}}>
          No we didn't mistake the word "Faster", Neither "Fast"! 😂
        </Text>
      </View>
      {children}
      <View style={styles.poweredContainer}>
        <Text h4>Powered by: </Text>
        <Image
          width={100}
          height={100}
          style={{
            height: 55,
            width: 90,
            resizeMode: 'contain',
          }}
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
});
