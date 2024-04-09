import {Text} from '@rneui/themed';
import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import SocialLoginButton from 'src/components/ui/buttons/SocialLoginButton';
import TextInput from 'src/components/ui/inputs/TextInput';
import BaseView from 'src/components/ui/views/BaseView';
import {signIn} from 'src/forms';
import {useLoginMutation} from 'src/redux/api/auth';
import {confirmAuth} from 'src/redux/features/auth';
import {responseHandler} from 'src/utils/errorHandling';
import styles from './styles';

export default function EmailLogin() {
  // useDispatch
  const dispatch = useDispatch();

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
  const {control, handleSubmit} = useForm();

  const _onSubmit = data => {
    // text to lowercase
    login({username: data.username.toLowerCase(), password: data.password});
  };
  return (
    <BaseView description={<Text>Welcome to MobileFast</Text>}>
      <View style={styles.actionsContainer}>
        {signIn.map((item, index) => (
          <TextInput
            control={control}
            key={index}
            name={item.name}
            placeholder={item.placeholder}
            secureTextEntry={item.secureTextEntry}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            color="rgba(255, 255, 255, 0.8)"
          />
        ))}
        <SocialLoginButton
          color="#8221FF"
          text="Sign In"
          textColor="white"
          onPress={handleSubmit(_onSubmit)}
        />
      </View>
    </BaseView>
  );
}
