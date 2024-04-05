import {t} from 'i18next';

export const ERRORS = {
  INVALID_EMAIL: t('invalid_email'),
  INVALID_PASSWORD: t('Invalid password'),
  INVALID_USERNAME: t('Invalid username'),
  INVALID_PHONE: t('Invalid phone number'),
  INVALID_NAME: t('Invalid name'),
  INVALID_ID: t('Invalid ID'),
  INVALID_TOKEN: t('Invalid token'),
  INVALID_ADDRESS: t('Invalid address'),
  INVALID_DATE: t('Invalid date'),
};

export async function responseHandler(
  isSuccess: boolean,
  isError: boolean,
  isLoading: boolean,
  isUninitialized: boolean,
  data: any,
  onSuccess: (data: string) => void,
  onError: (data: string) => void,
) {
  isSuccess && console.log('Login success');
  isError && console.log('Login failed');
  isLoading && console.log('Logging in...');
  isUninitialized && console.log('Login uninitialized');
  isSuccess && console.log(JSON.stringify(data));
  if (isSuccess) {
    await onSuccess(data);
  } else if (isError) {
    await onError(data);
  }
}
