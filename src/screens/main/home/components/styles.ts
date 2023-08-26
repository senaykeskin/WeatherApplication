import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../utils/colors';

export const styles = StyleSheet.create({
  hourly_forecast_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3.9,
    height: Dimensions.get('window').width / 2.8,
    padding: 10,
    marginRight: 10,
  },
  hour: {
    fontSize: 13,
    color: COLORS.hours,
    fontWeight: '600',
  },
  temp: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  weather_icon: {
    height: 40,
    width: 40,
    marginLeft: '2%',
  },
  wind_area: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width / 4.2,
    alignItems: 'center',
  },
  wind_direction_icon: {
    transform: [{rotate: '45deg'}],
  },
  wind: {
    fontSize: 15,
    color: COLORS.hours,
    fontWeight: '500',
  },
  three_days_forecast_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 5,
  },
  icon: {
    height: 35,
    width: 35,
    marginLeft: '5%',
  },
  date_and_text: {
    fontSize: 16,
    color: COLORS.white,
    marginLeft: '2%',
    width: '50%',
  },
  min_max_temp: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'right',
    marginLeft: '5%',
  },
  bottom_container: {
    height: Dimensions.get('window').width / 6,
    width: Dimensions.get('window').width / 2.3,
    margin: '2%',
  },
  features: {
    fontSize: 12,
    color: COLORS.black,
    flexWrap: 'wrap',
  },
  values: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '600',
  },
});
