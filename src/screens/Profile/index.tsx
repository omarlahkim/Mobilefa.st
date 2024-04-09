import {Button, Text} from '@rneui/themed';
import React from 'react';
import {useForm} from 'react-hook-form';
import {RefreshControl, ScrollView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Title from 'src/components/ui/headers/Title';
import TextInput from 'src/components/ui/inputs/TextInput';
import {profile} from 'src/forms';
import {navigateToSettings} from 'src/navigation/services';
import {useGetUserQuery} from 'src/redux/api/user';
import {logOutUser} from 'src/services/user';
import {styles} from './styles';

export default function Profile() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const {control, handleSubmit} = useForm();
  const _onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const _onSubmit = data => {
    console.log(data);
  };
  const {} = useGetUserQuery();

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
      }
      contentContainerStyle={styles.container}>
      <Title
        title="Profile"
        iconName="gear"
        iconType="font-awesome"
        size="md"
        onPress={navigateToSettings}
      />
      <View style={styles.contentContainer}>
        <FastImage
          style={[
            {width: 100, height: 100, borderRadius: 100, overflow: 'hidden'},
          ]}
          resizeMode={FastImage.resizeMode.cover}
          source={{
            uri: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg',
            priority: FastImage.priority.normal,
          }}
        />
        <Text style={{paddingVertical: 10}} h2>
          Omar Lahkim
        </Text>
        {profile.map((item, index) => (
          <TextInput
            onFocus={() => setIsFocused(true)}
            control={control}
            key={index}
            name={item.label}
            labelColor="#555555"
            value={item.value}
            label={item.label}
            secureTextEntry={item.secureTextEntry}
          />
        ))}

        {isFocused ? (
          <Button onPress={handleSubmit(_onSubmit)} color={'primary'}>
            Save Changes
          </Button>
        ) : null}

        <Button type="solid" title="Log Out" onPress={logOutUser} />
        <Button type="clear" title="Delete my Account" onPress={logOutUser} />
      </View>
    </ScrollView>
  );
}
