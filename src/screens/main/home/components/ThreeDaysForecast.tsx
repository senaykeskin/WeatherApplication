import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

const IconAndWeather = ({icon, date, text, maxTemp, minTemp}: any) => {
  const roundedMaxTemp = Math.floor(maxTemp);
  const roundedMinTemp = Math.floor(minTemp);

  return (
    <View>
      <View style={styles.three_days_forecast_container}>
        <Image source={{uri: icon}} style={styles.icon} />
        <Text
          style={styles.date_and_text}
          numberOfLines={1}
          ellipsizeMode="tail">
          {date} - {text}
        </Text>
        <Text style={styles.min_max_temp}>
          {roundedMaxTemp}&#176;C / {roundedMinTemp}&#176;C
        </Text>
      </View>
    </View>
  );
};

export default IconAndWeather;
