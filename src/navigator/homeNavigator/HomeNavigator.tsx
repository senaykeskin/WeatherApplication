import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../routes';
import HomeScreen from '../../screens/main/home';
import SearchScreen from '../../screens/search';
import SplashScreen from '../../screens/splash';

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
      <StackMain.Screen
        name={Routes.Splash}
        component={SplashScreen}
        options={{headerShown: false}}
      />
    </StackMain.Navigator>
  );
};

export default HomeNavigator;
