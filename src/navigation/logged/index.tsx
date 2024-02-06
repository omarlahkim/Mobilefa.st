import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Login';
import {homeOptions} from '../options';

const Stack = createNativeStackNavigator();

const LoggedInNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={homeOptions} />
  </Stack.Navigator>
);

export default LoggedInNavigator;
