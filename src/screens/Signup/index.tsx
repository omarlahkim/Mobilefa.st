import {Button, Icon, Image, Text} from '@rneui/themed';
import React, {ComponentProps, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import TextInput from 'src/components/ui/inputs/TextInput';
import {signUp as signUpData} from 'src/forms';
import {useRegisterMutation} from 'src/redux/api/auth';
import {confirmAuth} from 'src/redux/features/auth';
import {responseHandler} from 'src/utils/errorHandling';
import styles from './styles';

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

  const {control, handleSubmit} = useForm();

  const _signUp = async data => {
    console.log(data);
    // if (password !== verifyPassword) {
    //   Alert.alert('Passwords do not match');
    //   return;
    // }
    // register({
    //   password1: password,
    //   password2: verifyPassword,
    //   username,
    //   email,
    //   // full_name: fullName,
    // });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        width={100}
        height={100}
        style={{
          height: 45,
          width: 240,
          resizeMode: 'contain',
        }}
        source={require('../../../assets/images/logo.png')}
      />
      <View>
        <Text h1 style={{textAlign: 'center'}}>
          Welcome to MobileFast
        </Text>
        <Text h4 style={{textAlign: 'center'}}>
          You can make your startup faster with us
        </Text>
      </View>
      <View style={styles.actionsContainer}>
        {signUpData.map((item, index) => (
          <TextInput
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            textColor="black"
            color="rgba(255, 255, 255, 0.8)"
            textAlign="left"
            control={control}
            key={index}
            name={item.label}
            placeholder={item.placeholder}
            secureTextEntry={item.secureTextEntry}
          />
        ))}
        <Button title="Sign Up" onPress={handleSubmit(_signUp)}></Button>
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
