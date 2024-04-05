import React from 'react';
import {ScrollView} from 'react-native';
import styles from './styles';
import {Button, Text} from '@rneui/themed';
import {navigateToPurchaseModal} from 'src/navigation/services';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h1>Home</Text>
      <Button
        title="Open In App Purchase Modal"
        onPress={navigateToPurchaseModal}
      />
    </ScrollView>
  );
}
