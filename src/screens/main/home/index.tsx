import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View,
  ActivityIndicator,
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
import {useFocusEffect} from '@react-navigation/native';
import {fetchDataTransfer, getDateLabel} from '../../../constants';
import {STRINGS} from '../../../utils/strings';

const HomeScreen = ({navigation}: any) => {
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        setIsLoading(true);

        try {
          const data = await fetchDataTransfer();

          if (data !== null) {
            setWeatherData(data);
          }
        } catch (error) {
          console.error('Veri alma hatası:', error);
        } finally {
          setIsLoading(false);
        }

        const interval = setInterval(() => {
          setCurrentTime(new Date());
        }, 60000);

        return () => {
          clearInterval(interval);
        };
      };

      fetchData().then();
    }, []),
  );

  const forecastList = weatherData?.forecast.forecastday;
  const roundedTemp = Math.floor(weatherData?.current.temp_c);
  const [currentTime, setCurrentTime] = useState(new Date());
  const weatherData_text = weatherData?.current.condition.text;
  const currentList = weatherData?.current;

  const backgroundImage = () => {
    if (weatherData) {
      if (currentList.is_day === 0) {
        return require('../../../../assets/night_sky.jpg');
      } else {
        if (weatherData_text.includes('Açık')) {
          return require('../../../../assets/blue_sky.jpg');
        } else if (weatherData_text.includes('Parçalı Bulutlu')) {
          return require('../../../../assets/partly_cloudy.jpg');
        } else if (weatherData_text.includes('Güneş')) {
          return require('../../../../assets/sunny_sky.jpg');
        } else if (
          weatherData_text.includes('ağış') ||
          weatherData_text.includes('afif ya')
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
      ? require('../../../../assets/black_screen.jpg')
      : backgroundImage();

  const navigateSearch = () => {
    navigation.navigate(Routes.Search);
  };

  const navigateForecast = () => {
    navigation.navigate(Routes.Forecast);
  };

  const getHourLabel = (index: number, item: any) => {
    const ItemDay = item.time.substring(8, 10);
    const ItemMonth = item.time.substring(5, 7);

    const time = `${ItemDay}/${ItemMonth}`;

    if (index === 0) {
      return STRINGS.now;
    } else if (item.time.substring(11, 16) === '00:00') {
      return time;
    } else {
      return item.time.substring(11, 16);
    }
  };

  const List = [
    {
      text: STRINGS.felt_temperature,
      value: currentList?.feelslike_c + '\u00B0C',
    },
    {
      text: STRINGS.humidity,
      value: currentList?.humidity + '\u0025',
    },
    {
      text: STRINGS.daily_chance_of_rain,
      value:
        forecastList && forecastList[0].day.daily_chance_of_rain + '\u0025',
    },
    {
      text: STRINGS.pressure,
      value: currentList?.pressure_mb + 'mbar',
    },
    {
      text: STRINGS.wind_speed,
      value: currentList?.wind_kph + 'km/s',
    },
    {
      text: STRINGS.uv,
      value: currentList?.uv,
    },
  ];

  return (
    <View>
      <StatusBar
        translucent={true}
        backgroundColor={COLORS.home_status_bar_bg}
      />
      {!weatherData ? (
        <View style={styles.splash_bg}>
          <View style={styles.splash_text_container}>
            <Text style={styles.splash_text}>{STRINGS.only_one_sec}</Text>
          </View>
        </View>
      ) : (
        <ImageBackground blurRadius={0} style={styles.container} source={image}>
          {isLoading && (
            <ActivityIndicator
              size={40}
              color={COLORS.indicator}
              style={styles.indicator}
            />
          )}
          <View style={styles.tabBar}>
            <TouchableWithoutFeedback onPress={() => navigateSearch()}>
              <AddIcon name={'add'} size={40} color={COLORS.add_icon} />
            </TouchableWithoutFeedback>
            <Text style={styles.city_name}>{weatherData?.location.name}</Text>
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
              data={weatherData?.forecast.forecastday.slice(0, 3)}
              keyExtractor={item => item.date_epoch.toString()}
              renderItem={({item, index}) => {
                const dateLabel = getDateLabel(index, item.date);
                return (
                  <IconAndWeather
                    icon={'https:' + item.day.condition.icon}
                    date={dateLabel}
                    text={item.day.condition.text}
                    maxTemp={item.day.maxtemp_c}
                    minTemp={item.day.mintemp_c}
                  />
                );
              }}
              numColumns={1}
            />
            <TouchableWithoutFeedback onPress={navigateForecast}>
              <View style={styles.five_days_forecast_container}>
                <Text style={styles.five_days_forecast}>
                  {STRINGS.three_days_forecast}
                </Text>
              </View>
            </TouchableWithoutFeedback>
            {forecastList && (
              <FlatList
                horizontal={true}
                style={styles.hourly_component}
                data={forecastList
                  ?.map((day: any) => day.hour)
                  .flat()
                  .filter((item: any) => {
                    const itemHour = new Date(item.time).getHours();
                    const itemDate = new Date(item.time);

                    const year = itemDate.getFullYear();
                    const month = String(itemDate.getMonth() + 1).padStart(
                      2,
                      '0',
                    );
                    const day = String(itemDate.getDate()).padStart(2, '0');
                    const fullItemDate = `${year}-${month}-${day}`;
                    const numericItemDate = parseInt(
                      fullItemDate.replace(/-/g, ''),
                      10,
                    );

                    const currentHour = currentTime.getHours();
                    const currentDate = currentTime;

                    const year2 = currentDate.getFullYear();
                    const month2 = String(currentDate.getMonth() + 1).padStart(
                      2,
                      '0',
                    );
                    const day2 = String(currentDate.getDate()).padStart(2, '0');
                    const formattedCurrentDate = `${year2}-${month2}-${day2}`;
                    const numericCurrentDate = parseInt(
                      formattedCurrentDate.replace(/-/g, ''),
                      10,
                    );

                    return (
                      (numericItemDate === numericCurrentDate &&
                        itemHour >= currentHour) ||
                      numericItemDate > numericCurrentDate
                    );
                  })
                  .slice(0, 24)}
                overScrollMode="never"
                keyExtractor={item => item.time}
                renderItem={({item, index}) => {
                  const hourData = getHourLabel(index, item);
                  return (
                    <Hourly
                      hour={hourData}
                      weather={item.temp_c}
                      icon={'https:' + item.condition.icon}
                      wind={item.wind_kph}
                      wind_dir={item.wind_dir}
                    />
                  );
                }}
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
      )}
    </View>
  );
};

export default HomeScreen;
