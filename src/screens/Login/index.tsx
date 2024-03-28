import {Text} from '@rneui/themed';
import React, {ComponentProps, useEffect} from 'react';
import {View} from 'react-native';
import {AccessToken, LoginManager, Profile} from 'react-native-fbsdk-next';
import Or from 'src/components/Common/UI/Or';
import BaseView from '../../components/Common/UnauthenticatedSection/BaseView';
import SocialLoginButton from '../../components/Common/UnauthenticatedSection/SocialLoginButton';
import styles from './styles';
import {useOauth2LoginMutation} from 'src/redux/api/auth';
import {responseHandler} from 'src/utils/errorHandling';
import {confirmAuth} from 'src/redux/features/auth';
import {useDispatch} from 'react-redux';

export default function Login({navigation}: ComponentProps<any>) {
  const dispatch = useDispatch();
  // const {t} = useTranslation();

  const [oauth2Login, {isError, isLoading, isSuccess, isUninitialized, data}] =
    useOauth2LoginMutation();

  const navigateToSignUp = () => {
    console.log('Navigating to SignUp');
    navigation.navigate('SignUp');
  };

  useEffect(() => {
    responseHandler(
      isSuccess,
      isError,
      isLoading,
      isUninitialized,
      data,
      () => {
        console.log(data.access);
        dispatch(confirmAuth(data.access));
      },
      () => {
        console.log('Login failed');
      },
    );
  }, [isSuccess, isError, isLoading, isUninitialized, data, dispatch]);

  const facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        await AccessToken.getCurrentAccessToken().then(({accessToken}) => {
          console.log(accessToken.toString());
          oauth2Login({
            provider: 'facebook',
            access_token: accessToken.toString(),
          });
        });
        await Profile.getCurrentProfile().then(profile => {
          console.log(profile);
        });
        console.log(JSON.stringify(result));
      }
    } catch (error) {
      console.log('Login fail with error: ', error);
    }
  };

  return (
    <BaseView
      description={
        <>
          Develop{' '}
          <Text
            style={{
              textDecorationStyle: 'solid',
              textDecorationLine: 'underline',
              textDecorationColor: '#FFBB00',
            }}>
            Faster
          </Text>{' '}
          Fast ⚡️ Mobile Applications that generate money 💰
        </>
      }>
      <View style={styles.actionsContainer}>
        <SocialLoginButton
          color="#3B5998"
          text="Sign In with Facebook"
          icon="facebook"
          tcolor="white"
          onPress={facebookLogin}
        />
        <Or />
        <SocialLoginButton
          color="#8221FF"
          text="Sign In using Email"
          icon="email"
          tcolor="white"
          onPress={() => navigation.navigate('EmailLogin')}
        />
      </View>
      <View style={styles.SignUpContainer}>
        <Text h3>Don't have an account?</Text>
        <SocialLoginButton
          color="#FFBB00"
          text="Create your account"
          tcolor="black"
          onPress={navigateToSignUp}
        />
      </View>
    </BaseView>
  );
}
// dispatch(login('AZEEE'))
