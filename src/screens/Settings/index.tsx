import React from 'react';
import {Text} from '@rneui/themed';
import {ScrollView} from 'react-native';
import {styles} from './styles';

export default function Settings() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h1>Settings</Text>
    </ScrollView>
  );
}
