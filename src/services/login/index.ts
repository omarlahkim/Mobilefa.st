import {login} from '../../redux/features/auth';

export const loginService = (token: string) => {
  return login(token);
};
