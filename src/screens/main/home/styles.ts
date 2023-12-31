import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  splash_bg: {
    height: '100%',
    backgroundColor: COLORS.black,
  },
  splash_text_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash_text: {
    color: COLORS.gray,
    fontSize: 17,
  },
  indicator: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2,
    left: Dimensions.get('window').width / 2 - 20,
    zIndex: 999,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  city_name: {
    fontWeight: 'bold',
    fontSize: 25,
    color: COLORS.white,
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.5,
    textAlign: 'center',
  },
  settings_icon: {
    alignSelf: 'center',
  },
  scroll: {
    height: '100%',
  },
  degree_area: {
    height: 350,
    marginTop: '10%',
  },
  degree_and_celsius: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%',
  },
  degree: {
    fontWeight: 'normal',
    fontSize: 100,
    color: COLORS.white,
    alignSelf: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  celsius: {
    position: 'absolute',
    top: 35,
    right: 110,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  fahrenheit: {
    position: 'absolute',
    top: 35,
    right: 110,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  area: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weather: {
    fontSize: 30,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
  three_days_forecast_container: {
    height: 60,
    width: '90%',
    backgroundColor: COLORS.three_days_forecast_container,
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
    opacity: 0.8,
  },
  three_days_forecast: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  hourly_component: {
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  daily_values_container: {
    borderRadius: 20,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
    opacity: 0.8,
    padding: 25,
    backgroundColor: COLORS.three_days_forecast_container,
  },
});
