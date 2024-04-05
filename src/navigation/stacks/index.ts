import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Create stack navigators
const ProfileStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
// Create a bottom tab navigator
const Tab = createBottomTabNavigator();
// Create a stack navigator
const AuthStack = createNativeStackNavigator();

export {ProfileStack, MainStack, Tab, AuthStack};
