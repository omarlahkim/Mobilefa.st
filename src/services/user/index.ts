import {destroyAuth} from 'src/redux/features/auth';
import {store} from 'src/redux/store/store';

export const logOutUser = () => {
  return store.dispatch(destroyAuth());
};

export const deleteProfileService = () => {
  return store.dispatch(destroyAuth());
};

export const resetPasswordService = () => {
  return store.dispatch(destroyAuth());
};
