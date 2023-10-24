import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';
import {useEffect, useState} from 'react';
import {getDegreeValue} from '../../../../constants';

const IconAndWeather = ({icon, date, text, maxTemp, minTemp}: any) => {
  const roundedMaxTemp = Math.floor(maxTemp);
  const roundedMinTemp = Math.floor(minTemp);
  const [isDegree, setIsDegree] = useState<string>('');

  useEffect(() => {
    getDegreeValue().then(data => {
      data === '0' ? setIsDegree('\u00B0F') : setIsDegree('\u00B0C');
    });
  });

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
          {roundedMaxTemp}
          {isDegree} / {roundedMinTemp}
          {isDegree}
        </Text>
      </View>
    </View>
  );
};

export default IconAndWeather;
