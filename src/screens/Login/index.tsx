import react, {ComponentProps} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';
import {login} from '../../redux/features/auth';
import {useDispatch} from 'react-redux';
import {Image, Text} from '@rneui/themed';
import SocialLoginButton from '../../components/Common/UnauthenticatedSection/SocialLoginButton';
import BaseView from '../../components/Common/UnauthenticatedSection/BaseView';
import Or from 'src/components/Common/UI/Or';

export default function Login({navigation}: ComponentProps<any>) {
  const dispatch = useDispatch();

  const navigateToSignUp = () => {
    console.log('Navigating to SignUp');
    navigation.navigate('SignUp');
  };

  return (
    <BaseView>
      <View style={styles.actionsContainer}>
        <SocialLoginButton
          color="white"
          text="Sign In with Google"
          icon="google"
          tcolor="#4285F4"
          type="antdesign"
          onPress={console.log}
        />
        <SocialLoginButton
          color="black"
          text="Sign In with Apple"
          icon="apple"
          tcolor="white"
          onPress={console.log}
        />

        <Or />
        <SocialLoginButton
          color="#8221FF"
          text="Sign In using Email"
          icon="email"
          tcolor="white"
          onPress={() => dispatch(login('AZEEE'))}
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
