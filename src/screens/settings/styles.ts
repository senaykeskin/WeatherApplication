import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.black,
  },
  settings: {
    fontSize: 33,
    color: COLORS.white,
    marginLeft: '5%',
    marginTop: '3%',
    fontWeight: '300',
  },
  units: {
    color: COLORS.gray,
    fontSize: 18,
    marginLeft: '5%',
    marginTop: '5%',
  },
  temperature_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    paddingVertical: '5%',
    alignSelf: 'center',
  },
  temperature: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 23,
  },
  degree_area: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  degree: {
    color: COLORS.gray,
    fontSize: 20,
    right: 10,
  },
  arrow_area: {
    flexDirection: 'column',
    right: 5,
  },
  modal_container: {
    backgroundColor: COLORS.gray,
    width: '40%',
    borderRadius: 10,
    position: 'absolute',
    top: Dimensions.get('window').height / 6.5,
  },
  degree_button: {
    padding: 15,
  },
  text_degree: {
    fontSize: 25,
    color: COLORS.white,
  },
  fahrenheit_button: {
    padding: 15,
  },
  text_fahrenheit: {
    fontSize: 25,
    color: COLORS.white,
  },
});
