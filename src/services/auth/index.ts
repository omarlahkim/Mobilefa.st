import {store} from 'src/redux/store/store';
import {confirmAuth, destroyAuth} from '../../redux/features/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {responseHandler} from 'src/utils/errorHandling';

export const getFaceBookToken = async (oauth2Login: Function) => {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile']);
    if (result.isCancelled) {
      return console.log('Login cancelled');
    }
    if (result.declinedPermissions) {
      return console.log('Login declined');
    }
    if (result.grantedPermissions) {
      return console.log('Login granted');
    }

    await AccessToken.getCurrentAccessToken().then(Token => {
      oauth2Login({
        provider: 'facebook',
        access_token: Token?.accessToken.toString(),
      });
    });
  } catch (error) {
    console.log('Login fail with error: ', error);
  }
};

export const handleFacebookLoginResponse = async (Status: any) => {
  const {isSuccess, isError, isLoading, isUninitialized, data, error} = Status;
  return await responseHandler(
    isSuccess,
    isError,
    isLoading,
    isUninitialized,
    data,
    () => {
      store.dispatch(confirmAuth(data.access));
    },
    () => {
      console.log(error);
    },
  );
};

export const loginService = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  console.log(username, password);

  return await store.dispatch(await confirmAuth('token'));
};

//prop : redux dispatch
export const logoutService = () => {
  return store.dispatch(destroyAuth());
};

export const registerService = () => {
  return store.dispatch(destroyAuth());
};

export const forgotPasswordService = () => {
  return store.dispatch(destroyAuth());
};
