import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import {Button, Text} from '@rneui/themed';
import GradientBackgroundView from '../../components/Common/GradientBackgroundView';

export default function Home({navigation}: any) {
  return (
    <GradientBackgroundView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text h1>Home</Text>
        <Button
          title="Open In App Purchase Modal"
          onPress={() => {
            navigation.navigate('InAppPurchaseModal');
          }}
        />
      </ScrollView>
    </GradientBackgroundView>
  );
}
