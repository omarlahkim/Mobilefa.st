import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Login, Signup} from '../../screens';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';

const UnLoggedNavigator = () => {
  // Create a stack navigator
  const AuthStack = createNativeStackNavigator();
  // Get the isLogged state from the redux store
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);
  // Set the options for the stack navigator
  const options: NativeStackNavigationOptions = {
    // When logging out, a pop animation feels intuitive
    // You can remove this if you want the default 'push' animation
    animationTypeForReplace: isLogged ? 'push' : 'pop',
    headerShown: false,
  };
  // Return the stack navigator with authentication screens
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} options={options} />
      <AuthStack.Screen name="SignUp" component={Signup} options={options} />
    </AuthStack.Navigator>
  );
};

export default UnLoggedNavigator;
