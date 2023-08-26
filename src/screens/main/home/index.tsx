import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from './styles';
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import Settings from 'react-native-vector-icons/MaterialIcons';
import Celsius from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../utils/colors';
import {Routes} from '../../../navigator/routes';
import IconAndWeather from './components/ThreeDaysForecast';
import Hourly from './components/HourlyForecast';
import BottomContainer from './components/OtherInformations';

const HomeScreen = ({route, navigation}: any) => {
  const weatherData = route.params;
  const forecastList = weatherData?.weatherDetails.forecast.forecastday;
  const roundedTemp = Math.floor(weatherData?.weatherDetails.current.temp_c);
  const [currentTime, setCurrentTime] = useState(new Date());
  const weatherData_text = weatherData?.weatherDetails.current.condition.text;
  const currentList = weatherData?.weatherDetails.current;
  const currentHour = currentTime.getHours();
  const today = currentTime.toISOString().slice(0, 10);

  const backgroundImage = () => {
    let currentHourData;
    if (forecastList) {
      const currentHourIndex = forecastList[0].hour.findIndex(
        (item: any) =>
          item.time.indexOf(today + ' ' + currentHour + ':' + '00') !== -1,
      );

      if (currentHourIndex !== -1) {
        currentHourData = forecastList[0].hour[currentHourIndex];
        //console.log('Current hour data:', currentHourData);
      } else {
        //console.log('Current hour data not found.');
      }
    }

    if (currentHourData) {
      if (currentHourData.is_day === 0) {
        return require('../../../../assets/night_sky.jpg');
      } else {
        if (weatherData_text.includes('Açık')) {
          return require('../../../../assets/blue_sky.jpg');
        } else if (weatherData_text.includes('Parçalı Bulutlu')) {
          return require('../../../../assets/partly_cloudy.jpg');
        } else if (weatherData_text.includes('Güneş')) {
          return require('../../../../assets/sunny_sky.jpg');
        } else if (
          weatherData_text.includes('ağışlı') ||
          weatherData_text.includes('Hafif ya')
        ) {
          return require('../../../../assets/rainy_sky.jpg');
        } else if (
          weatherData_text.includes('Sis') ||
          weatherData_text.includes('Pus')
        ) {
          return require('../../../../assets/foggy(1).jpg');
        } else {
          return require('../../../../assets/blue_sky.jpg');
        }
      }
    }
  };

  const image =
    weatherData_text == null
      ? require('../../../../assets/blue_sky.jpg')
      : backgroundImage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const navigateSearch = () => {
    navigation.navigate(Routes.Search);
  };

  const getDayLabel = (dateString: string) => {
    const daysOfWeek = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  };

  const List = [
    {
      text: 'Hissedilen',
      value: currentList?.feelslike_c + '\u00B0C',
    },
    {
      text: 'Nem',
      value: currentList?.humidity + '\u0025',
    },
    {
      text: 'Yağmur yağma olasılığı',
      value:
        forecastList && forecastList[0].day.daily_chance_of_rain + '\u0025',
    },
    {
      text: 'Basınç',
      value: currentList?.pressure_mb + 'mbar',
    },
    {
      text: 'Rüzgar hızı',
      value: currentList?.wind_kph + 'km/s',
    },
    {
      text: 'UV endeksi',
      value: currentList?.uv,
    },
  ];

  return (
    <View>
      <StatusBar
        translucent={true}
        backgroundColor={COLORS.home_status_bar_bg}
      />
      <ImageBackground blurRadius={0} style={styles.container} source={image}>
        <View style={styles.tabBar}>
          <TouchableWithoutFeedback onPress={() => navigateSearch()}>
            <AddIcon name={'add'} size={40} color={COLORS.add_icon} />
          </TouchableWithoutFeedback>
          <Text style={styles.city_name}>{weatherData?.weatherData.name}</Text>
          <Settings
            name={'settings'}
            size={30}
            color={COLORS.white}
            style={styles.settings_icon}
          />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          scrollEnabled={true}
          style={styles.scroll}
          overScrollMode="never">
          <View style={styles.degree_area}>
            <View style={styles.degree_and_celsius}>
              <Text style={styles.degree}>{roundedTemp}</Text>
              <Celsius
                name={'temperature-celsius'}
                size={30}
                color={COLORS.white}
                style={styles.celsius}
              />
            </View>
            <View style={styles.area}>
              <Text style={styles.weather}>{weatherData_text}</Text>
            </View>
          </View>
          <FlatList
            scrollEnabled={false}
            data={weatherData?.weatherDetails.forecast.forecastday.slice(0, 3)}
            keyExtractor={item => item.date_epoch.toString()}
            renderItem={({item, index}) => {
              if (index === 0) {
                return (
                  <IconAndWeather
                    icon={'https:' + item.day.condition.icon}
                    date={'Bugün'}
                    text={item.day.condition.text}
                    maxTemp={item.day.maxtemp_c}
                    minTemp={item.day.mintemp_c}
                  />
                );
              } else if (index === 1) {
                return (
                  <IconAndWeather
                    icon={'https:' + item.day.condition.icon}
                    date={'Yarın'}
                    text={item.day.condition.text}
                    maxTemp={item.day.maxtemp_c}
                    minTemp={item.day.mintemp_c}
                  />
                );
              } else {
                return (
                  <IconAndWeather
                    icon={'https:' + item.day.condition.icon}
                    date={getDayLabel(item.date)}
                    text={item.day.condition.text}
                    maxTemp={item.day.maxtemp_c}
                    minTemp={item.day.mintemp_c}
                  />
                );
              }
            }}
            numColumns={1}
          />
          <View style={styles.five_days_forecast_container}>
            <Text style={styles.five_days_forecast}>
              5 günlük hava durumu tahmini
            </Text>
          </View>
          {forecastList && (
            <FlatList
              horizontal={true}
              style={styles.hourly_component}
              data={forecastList
                ?.map((day: any) => day.hour)
                .flat()
                .filter((item: any) => {
                  const itemDate = new Date(item.time).getDate();
                  const itemHour = new Date(item.time).getHours();
                  const currentDate = currentTime.getDate();

                  return (
                    (itemDate === currentDate && itemHour >= currentHour) ||
                    itemDate > currentDate
                  );
                })
                .slice(0, 17)}
              overScrollMode="never"
              renderItem={({item}) => (
                <Hourly
                  hour={item.time.substring(11, 16)}
                  weather={item.temp_c}
                  icon={'https:' + item.condition.icon}
                  wind={item.wind_kph}
                  wind_dir={item.wind_dir}
                />
              )}
              showsHorizontalScrollIndicator={false}
            />
          )}
          {weatherData && (
            <FlatList
              style={styles.daily_values_container}
              scrollEnabled={false}
              data={List}
              numColumns={2}
              renderItem={({item}) => (
                <BottomContainer text={item.text} value={item.value} />
              )}
            />
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
