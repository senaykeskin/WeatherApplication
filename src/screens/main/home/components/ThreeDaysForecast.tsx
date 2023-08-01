import * as React from 'react';
import {Image, Text, View} from 'react-native';
import Settings from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../../utils/colors';

export const ForecastList = [
  {
    id: '1',
    icon: require('../../../../../assets/sunny.png'),
    text: 'Bugün',
    weather: 'Açık',
    day: '30°',
    night: '20°',
  },
  {
    id: '2',
    icon: require('../../../../../assets/sunny.png'),
    text: 'Yarın',
    weather: 'Açık',
    day: '28°',
    night: '19°',
  },
  {
    id: '3',
    icon: require('../../../../../assets/sunny.png'),
    text: 'Çar',
    weather: 'Açık',
    day: '32°',
    night: '23°',
  },
];

const IconAndWeather = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
      }}>
      <Image source={props.icon} style={{height: 30, width: 30}} />
      <Text style={{fontSize: 20, color: COLORS.white, marginLeft: 5}}>
        {props.text} - {props.weather}
      </Text>
    </View>
  );
};
const Forecast = (props: any) => {
  return (
    <View style={{flexDirection: 'column', height: 50}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 50,
        }}>
        <IconAndWeather
          icon={props.icon}
          text={props.text}
          weather={props.weather}
        />
        <Text style={{fontSize: 20, color: COLORS.white, marginRight: '5%'}}>
          {props.day} / {props.night}
        </Text>
      </View>
    </View>
  );
};

export default Forecast;
