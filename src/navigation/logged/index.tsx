import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from 'src/screens/Profile';
import Settings from 'src/screens/Settings';
import InAppPurchaseModal from 'src/components/Modals/InAppPurchase';

// Create a stack navigator
const Tab = createBottomTabNavigator();

// Return the bottom tab navigator with the home screen
const LoggedInNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
    <Tab.Screen
      options={{headerShown: false}}
      name="Settings"
      component={Settings}
    />
    <Tab.Screen
      options={{headerShown: false}}
      name="Profile"
      component={Profile}
    />
  </Tab.Navigator>
);

const MainStack = createNativeStackNavigator();

const MainNavigator = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      options={{headerShown: false}}
      name="LoggedInNavigator"
      component={LoggedInNavigator}
    />
    <MainStack.Screen
      name="InAppPurchaseModal"
      component={InAppPurchaseModal}
      options={{headerShown: false, presentation: 'fullScreenModal'}}
    />
  </MainStack.Navigator>
);

export default MainNavigator;
