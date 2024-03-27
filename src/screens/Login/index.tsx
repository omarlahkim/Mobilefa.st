import {Text} from '@rneui/themed';
import React, {ComponentProps} from 'react';
import {View} from 'react-native';
import {LoginManager} from 'react-native-fbsdk-next';
import Or from 'src/components/Common/UI/Or';
import BaseView from '../../components/Common/UnauthenticatedSection/BaseView';
import SocialLoginButton from '../../components/Common/UnauthenticatedSection/SocialLoginButton';
import styles from './styles';

export default function Login({navigation}: ComponentProps<any>) {
  // const dispatch = useDispatch();
  // const {t} = useTranslation();

  const navigateToSignUp = () => {
    console.log('Navigating to SignUp');
    navigation.navigate('SignUp');
  };

  const facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        // 'email',
      ]);
      if (result.isCancelled) {
        console.log('Login cancelled');
      } else {
        console.log(
          'Login success with permissions: ',
          result.grantedPermissions,
        );
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
          Fast ⚡️ Mobile Applications that generate money 🤑
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
