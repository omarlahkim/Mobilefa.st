import {store} from 'src/redux/store/store';
import {confirmAuth, destroyAuth} from '../../redux/features/auth';

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

export const updateProfileService = () => {
  return store.dispatch(destroyAuth());
};

export const deleteProfileService = () => {
  return store.dispatch(destroyAuth());
};

export const forgotPasswordService = () => {
  return store.dispatch(destroyAuth());
};

export const resetPasswordService = () => {
  return store.dispatch(destroyAuth());
};
