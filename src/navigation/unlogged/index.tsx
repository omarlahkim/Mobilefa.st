import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Login, Signup} from '../../screens';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/store';

const UnLoggedNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);

  const options: NativeStackNavigationOptions = {
    // When logging out, a pop animation feels intuitive
    // You can remove this if you want the default 'push' animation
    animationTypeForReplace: isLogged ? 'push' : 'pop',
    headerShown: false,
  };

  return (
    <AuthStack.Navigator>
      <Stack.Screen name="Login" component={Login} options={options} />
      <Stack.Screen name="Signup" component={Signup} options={options} />
    </AuthStack.Navigator>
  );
};

export default UnLoggedNavigator;
