import React, {ComponentProps, useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {Button, Icon, Image, Input, Text} from '@rneui/themed';
import {track} from '@amplitude/analytics-react-native';
import {useRegisterMutation} from 'src/redux/api/auth';
import {responseHandler} from 'src/utils/errorHandling';
import {confirmAuth} from 'src/redux/features/auth';

interface IloginButtonProps {
  color: string;
  icon?: string;
  text: string;
  type?: string;
  tcolor?: string;
  onPress: () => any;
}

function SocialLoginButton({
  color,
  tcolor,
  icon,
  text,
  type,
  onPress,
}: IloginButtonProps) {
  return (
    <Button onPress={onPress} color={color}>
      <Icon type={type} color={tcolor} size={25} name={icon ?? 'email'} />
      <Text style={{color: tcolor, paddingHorizontal: 5}} h3>
        {text}
      </Text>
    </Button>
  );
}

export default function SignUp({navigation}: ComponentProps<any>) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const [register, {isError, isLoading, isSuccess, isUninitialized, data}] =
    useRegisterMutation();

  useEffect(() => {
    responseHandler(
      isSuccess,
      isError,
      isLoading,
      isUninitialized,
      data,
      () => {
        console.log('Register success');
        dispatch(confirmAuth(data.access));
      },
      () => console.log('Register failed'),
    );
  }, [isSuccess, isError, isLoading, isUninitialized, data, dispatch]);

  const navigateToSignUp = () => {
    console.log('Navigating to SignUp');
    track('Navigating to SignUp');
    navigation.navigate('SignUp');
  };

  const _signUp = async () => {
    if (password !== verifyPassword) {
      Alert.alert('Passwords do not match');
      return;
    }
    register({
      password1: password,
      password2: verifyPassword,
      username,
      email,
      // full_name: fullName,
    });
  };

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
        source={require('../../../assets/images/logo.png')}
      />
      <View>
        <Text h1 style={{textAlign: 'center'}}>
          Develop{' '}
          <Text
            style={{
              textDecorationStyle: 'solid',
              textDecorationLine: 'underline',
              textDecorationColor: '#FFBB00',
            }}>
            Faster
          </Text>{' '}
          Fast ⚡️ Mobile Applications that generate money 🤑
        </Text>
        <Text h4 style={{textAlign: 'center'}}>
          No we didn't mistake the word "Faster", Neither "Fast"! 😂
        </Text>
      </View>
      <View style={styles.actionsContainer}>
        <Input
          onChangeText={setFullName}
          value={fullName}
          placeholder="Full Name (First and Last)"
        />
        <Input
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <Input
          onChangeText={setEmail}
          value={email}
          placeholder="Email eg. example@email.com"
        />
        <Input
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <Input
          onChangeText={setVerifyPassword}
          value={verifyPassword}
          placeholder="Verify your Password"
          secureTextEntry
        />
        <Button title="Sign Up" onPress={_signUp}></Button>
      </View>
      <View style={styles.SignUpContainer}>
        <Text h3>Already have an account?</Text>
        <SocialLoginButton
          color="#FFBB00"
          icon="login"
          text="Login to your account"
          tcolor="black"
          onPress={navigateToSignUp}
        />
      </View>
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
          source={require('../../../assets/images/digitlift.png')}
        />
      </View>
    </ScrollView>
  );
}
