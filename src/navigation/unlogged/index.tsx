import {InitialState} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '../../screens';

const AuthNavigator = () => {
  const isLoggedIn = useSelector(
    (state: InitialState) => state.loginReducer.isLoggedIn,
  );
  const AuthStack = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          // When logging out, a pop animation feels intuitive
          // You can remove this if you want the default 'push' animation
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
    </AuthStack.Navigator>
  );
};
