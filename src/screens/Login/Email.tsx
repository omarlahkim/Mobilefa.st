import React from 'react';
import {Input, Text} from '@rneui/themed';
import {View} from 'react-native';
import BaseView from 'src/components/common/views/BaseView';
import SocialLoginButton from 'src/components/common/ui/buttons/SocialLoginButton';
import styles from './styles';
import {useEffect, useState} from 'react';
import {useLoginMutation} from 'src/redux/api/auth';
import {responseHandler} from 'src/utils/errorHandling';
import {confirmAuth} from 'src/redux/features/auth';
import {useDispatch} from 'react-redux';

export default function EmailLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // useDispatch
  const dispatch = useDispatch();
  const navigateToSignUp = () => {};

  const [login, {isError, isLoading, isSuccess, isUninitialized, data, error}] =
    useLoginMutation();

  useEffect(() => {
    responseHandler(
      isSuccess,
      isError,
      isLoading,
      isUninitialized,
      data,
      () => {
        console.log('Login success');
        dispatch(confirmAuth(data.access));
      },
      () => {
        console.log('Login failed');
        console.log(error);
      },
    );
  }, [isSuccess, isError, isLoading, isUninitialized, data, dispatch, error]);

  return (
    <BaseView
      description={
        <>
          Develop <Text style={styles.underlined}>Faster</Text> Fast ⚡️ Mobile
          Applications that generate money 💰
        </>
      }>
      <View style={styles.actionsContainer}>
        <Input
          defaultValue={username}
          onChangeText={setUsername}
          placeholder="Username or Email"
        />
        <Input
          defaultValue={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
        />
        <SocialLoginButton
          color="#8221FF"
          text="Sign In"
          textColor="white"
          onPress={() => {
            login({username: username.toLowerCase(), password});
          }}
        />
      </View>
      <View style={styles.SignUpContainer}>
        <Text h3>Don't have an account?</Text>
        <SocialLoginButton
          color="#FFBB00"
          text="Create your account"
          textColor="black"
          onPress={navigateToSignUp}
        />
      </View>
    </BaseView>
  );
}
