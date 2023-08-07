import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '10%',
    //backgroundColor: "gray"
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
    height: 300,
    marginTop: '10%',
    //backgroundColor: "pink",
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
    //backgroundColor: "purple"
  },
  celsius: {
    position: 'absolute',
    top: 25,
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
    color: COLORS.white,
    //backgroundColor: "gray"
  },
});
