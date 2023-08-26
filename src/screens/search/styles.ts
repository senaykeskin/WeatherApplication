import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: COLORS.white,
  },
  manage_cities: {
    color: COLORS.black,
    fontWeight: 'normal',
    fontSize: 30,
    marginLeft: '5%',
  },
  search_bar: {
    height: 50,
    width: '90%',
    backgroundColor: COLORS.search_bar_bg,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  search_icon: {
    marginLeft: '5%',
  },
  input: {
    width: '72%',
    marginLeft: 10,
    color: COLORS.black,
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
  },
  search_results_container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: COLORS.search_results_container_bg,
    borderRadius: 20,
    marginTop: 10,
  },
  search_results_rows: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.black,
    width: '90%',
  },
});
