import {Button, Icon, Text} from '@rneui/themed';
import React from 'react';
import {ScrollView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {destroyAuth} from 'src/redux/features/auth';
import {styles} from './styles';
export default function Profile() {
  const dispatch = useDispatch();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <Text h1>Profile</Text>
        <Icon name="gear" type="font-awesome" />
      </View>

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
        <Button
          type="clear"
          title="Log Out"
          onPress={() => {
            dispatch(destroyAuth());
          }}
        />
      </View>
    </ScrollView>
  );
}
