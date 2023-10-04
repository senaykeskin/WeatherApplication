import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../routes';
import HomeScreen from '../../screens/main/home';
import SearchScreen from '../../screens/search';
import ForecastScreen from '../../screens/fiveDaysForecast';
import {COLORS} from '../../utils/colors';

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
        name={Routes.Forecast}
        component={ForecastScreen}
        options={{
          headerShown: true,
          title: '',
          headerStyle: {backgroundColor: COLORS.black},
          headerTintColor: COLORS.white,
        }}
      />
    </StackMain.Navigator>
  );
};

export default HomeNavigator;
