import {Text} from '@rneui/themed';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import Or from 'src/components/ui/separators/OrSeparator';
import BaseView from '../../components/ui/views/BaseView';
import SocialLoginButton from '../../components/ui/buttons/SocialLoginButton';
import styles from './styles';
import {useOauth2LoginMutation} from 'src/redux/api/auth';
import {getFaceBookToken, handleFacebookLoginResponse} from 'src/services/auth';
import {navigateToEmailLogin, navigateToSignUp} from 'src/navigation/services';

export default function Login() {
  // const {t} = useTranslation();
  const [oauth2Login, Status] = useOauth2LoginMutation();

  const _handleFacebookLogin = async () => {
    await getFaceBookToken(oauth2Login);
  };
  useEffect(() => {
    handleFacebookLoginResponse(Status);
  }, [Status]);

  return (
    <BaseView description="Develop Faster Fast ⚡️ Mobile Applications that generate money 💰">
      <View style={styles.actionsContainer}>
        <SocialLoginButton
          color="#3B5998"
          text="Sign In with Facebook"
          icon="facebook"
          textColor="white"
          onPress={_handleFacebookLogin}
        />
        <Or />
        <SocialLoginButton
          color="#8221FF"
          text="Sign In using Email"
          icon="email"
          textColor="white"
          onPress={navigateToEmailLogin}
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
// dispatch(login('AZEEE'))
