import React, {ComponentProps} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {Button, Icon, Image, Input, Text} from '@rneui/themed';
import {track} from '@amplitude/analytics-react-native';

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

  const navigateToSignUp = () => {
    console.log('Navigating to SignUp');
    track('Navigating to SignUp');
    navigation.navigate('SignUp');
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
        <Input placeholder="Username" />
        <Input placeholder="Email eg. example@email.com" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Verify your Password" secureTextEntry />
        <Button
          title="Sign Up"
          onPress={() => {
            dispatch(login(''));
          }}></Button>
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
