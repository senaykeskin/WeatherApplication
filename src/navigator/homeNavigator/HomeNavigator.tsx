import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../routes';
import HomeScreen from '../../screens/main/home';
import {onGestureHandlerEvent} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/eventReceiver';
import SearchScreen from '../../screens/search';

const StackMain = createStackNavigator();
const HomeNavigator = () => {
  return (
    <StackMain.Navigator screenOptions={{gestureEnabled: false}}>
      <StackMain.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <StackMain.Screen
        name={Routes.Search}
        component={SearchScreen}
        options={{headerShown: true, title: ''}}
      />
    </StackMain.Navigator>
  );
};

export default HomeNavigator;
