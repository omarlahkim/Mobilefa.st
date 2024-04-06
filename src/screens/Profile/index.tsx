import {Button, Icon, Text} from '@rneui/themed';
import React from 'react';
import {ScrollView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import {logOutUser} from 'src/services/user';
import Title from 'src/components/ui/headers/Title';

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title
        title="Profile"
        iconName="gear"
        iconType="FontAwesome5"
        size="lg"
      />

      <View style={styles.contentContainer}>
        <FastImage
          style={[
            {width: 150, height: 150, borderRadius: 100, overflow: 'hidden'},
          ]}
          resizeMode={FastImage.resizeMode.cover}
          source={{
            uri: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg',
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.normal,
          }}
        />
        <Button type="clear" title="Log Out" onPress={logOutUser} />
      </View>
    </ScrollView>
  );
}
