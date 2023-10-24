import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {useFocusEffect} from '@react-navigation/native';
import {
  fetchDataTransfer,
  getDateLabel,
  getDegreeValue,
  max_temp,
  min_temp,
} from '../../constants';
import ForecastContainer from './components/DailyForecast';
import {COLORS} from '../../utils/colors';
import {STRINGS} from '../../utils/strings';

const ForecastScreen = () => {
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [isDegree, setIsDegree] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      getDegreeValue().then(data => {
        data === '0' ? setIsDegree('\u00B0F') : setIsDegree('\u00B0C');
      });

      const fetchData = async () => {
        try {
          const data = await fetchDataTransfer();

          if (data !== null) {
            setWeatherData(data);
          }
        } catch (error) {
          //console.error('Veri alma hatası:', error);
        }
      };

      fetchData().then();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{STRINGS.three_days}</Text>
      <View>
        <FlatList
          horizontal={true}
          contentContainerStyle={{
            justifyContent: 'space-evenly',
            width: '100%',
          }}
          data={weatherData?.forecast.forecastday.slice(0, 5)}
          renderItem={({item, index}) => {
            const dateLabel = getDateLabel(index, item.date);
            const editDate =
              item.date.toString().substring(8, 10) +
              '/' +
              item.date.toString().substring(5, 7);
            return (
              <ForecastContainer
                day={dateLabel}
                date={editDate}
                maxTemp={max_temp(item, isDegree)}
                minTemp={min_temp(item, isDegree)}
                daytime={item.day.condition.icon}
                wind={item.day.maxwind_kph}
                style={
                  index === 0
                    ? {backgroundColor: COLORS.dark_gray, borderRadius: 10}
                    : null
                }
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ForecastScreen;
