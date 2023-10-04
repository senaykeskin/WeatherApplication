import React from 'react';
import {Image, Text, View} from 'react-native';
import WindIcon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../../utils/colors';
import {styles} from './styles';
import {getWindDirection} from '../../../../constants';

const Hourly = ({hour, weather: temp, icon, wind, wind_dir}: any) => {
  const roundedTemp = Math.floor(temp);

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
