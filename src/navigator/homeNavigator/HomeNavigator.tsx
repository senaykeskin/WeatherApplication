import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../routes';
import HomeScreen from '../../screens/main/home';
import {onGestureHandlerEvent} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/eventReceiver';

const StackMain = createStackNavigator();
const HomeNavigator = () => {
  return (
    <StackMain.Navigator screenOptions={{gestureEnabled: false}}>
      <StackMain.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </StackMain.Navigator>
  );
};

export default HomeNavigator;
