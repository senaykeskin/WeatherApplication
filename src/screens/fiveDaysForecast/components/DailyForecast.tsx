import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../../utils/colors';
import Moon from 'react-native-vector-icons/Ionicons';
import Wind from 'react-native-vector-icons/Feather';

const ForecastContainer = ({
  style,
  day,
  date,
  daytime,
  maxTemp,
  minTemp,
  wind,
}: any) => {
  const roundedMaxTemp = Math.floor(maxTemp);
  const roundedMinTemp = Math.floor(minTemp);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.date}>{date}</Text>
      <Image source={{uri: 'https:' + daytime}} style={styles.image} />
      <Text style={styles.maxTemp}>{roundedMaxTemp}&#176;C</Text>
      <Text style={styles.minTemp}>{roundedMinTemp}&#176;C</Text>
      <Moon name={'moon'} size={30} color={'yellow'} style={styles.moon_icon} />
      <View style={styles.wind_area}>
        <Wind name={'wind'} size={20} color={COLORS.white} />
        <Text style={styles.wind}>{wind} km/s</Text>
      </View>
    </View>
  );
};

export default ForecastContainer;
