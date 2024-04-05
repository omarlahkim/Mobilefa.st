import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const nativeStackNavigationOptions = (
  isLogged: boolean,
): NativeStackNavigationOptions => {
  return {
    // When logging out, a pop animation feels intuitive
    // You can remove this if you want the default 'push' animation
    animationTypeForReplace: isLogged ? 'push' : 'pop',
    headerShown: false,
  };
};

// Set the options for the stack navigator
const authStackOptions = (isLogged: boolean) =>
  nativeStackNavigationOptions(isLogged);

export {authStackOptions, nativeStackNavigationOptions};
