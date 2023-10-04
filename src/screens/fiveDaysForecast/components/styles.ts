import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: Dimensions.get('window').width / 4,
    marginTop: 20,
    alignItems: 'center',
  },
  day: {
    color: COLORS.white,
    fontSize: 15,
    marginTop: 20,
  },
  date: {
    color: COLORS.white,
    fontSize: 14,
    marginTop: 5,
  },
  image: {
    height: 45,
    width: 45,
    marginTop: 30,
  },
  maxTemp: {
    color: COLORS.white,
    fontSize: 18,
    marginTop: 5,
  },
  minTemp: {
    color: COLORS.white,
    fontSize: 18,
    marginTop: 120,
  },
  moon_icon: {
    marginTop: 10,
    transform: [{rotate: '270deg'}],
  },
  wind_area: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  wind: {
    fontSize: 15,
    color: COLORS.white,
    fontWeight: '500',
    marginLeft: 5,
  },
});
