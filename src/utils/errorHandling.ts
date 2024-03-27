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
