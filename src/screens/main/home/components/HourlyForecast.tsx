import React from 'react';
import {Image, Text, View} from 'react-native';
import WindIcon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../../utils/colors';
import {styles} from './styles';

const Hourly = ({hour, weather: temp, icon, wind, wind_dir}: any) => {
  const roundedTemp = Math.floor(temp);

  const getWindDirection = (props: any) => {
    switch (props) {
      case 'N':
        return {transform: [{rotate: '-45deg'}]};
      case 'NNE':
        return {transform: [{rotate: '-22.5deg'}]};
      case 'NE':
        return {transform: [{rotate: '0deg'}]};
      case 'ENE':
        return {transform: [{rotate: '22.5deg'}]};
      case 'E':
        return {transform: [{rotate: '45deg'}]};
      case 'ESE':
        return {transform: [{rotate: '67.5deg'}]};
      case 'SE':
        return {transform: [{rotate: '90deg'}]};
      case 'SSE':
        return {transform: [{rotate: '112.5deg'}]};
      case 'S':
        return {transform: [{rotate: '135deg'}]};
      case 'SSW':
        return {transform: [{rotate: '157.5deg'}]};
      case 'SW':
        return {transform: [{rotate: '180deg'}]};
      case 'WSW':
        return {transform: [{rotate: '202.5deg'}]};
      case 'W':
        return {transform: [{rotate: '225deg'}]};
      case 'WNW':
        return {transform: [{rotate: '247.4deg'}]};
      case 'NW':
        return {transform: [{rotate: '270deg'}]};
      case 'NNW':
        return {transform: [{rotate: '292.5deg'}]};
      default:
    }
  };

  return (
    <View style={styles.hourly_forecast_container}>
      <Text style={styles.hour}>{hour}</Text>
      <Text style={styles.temp}>{roundedTemp}&#176;C</Text>
      <Image source={{uri: icon}} style={styles.weather_icon} />
      <View style={styles.wind_area}>
        <WindIcon
          name={'location-arrow'}
          size={10}
          color={COLORS.wind_icon}
          style={[styles.wind_direction_icon, getWindDirection(wind_dir)]}
        />
        <Text style={styles.wind}>{wind} km/s</Text>
      </View>
    </View>
  );
};
export default Hourly;
