import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../routes';
import HomeScreen from '../../screens/main/home';

const StackMain = createStackNavigator();
const HomeNavigator = () => {
  return (
    <StackMain.Navigator screenOptions={{gestureEnabled: false}}>
      <StackMain.Screen name={Routes.Home} component={HomeScreen} />
    </StackMain.Navigator>
  );
};

export default HomeNavigator;
