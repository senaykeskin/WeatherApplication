import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text, TouchableWithoutFeedback,
  View
} from "react-native";
import {styles} from './styles';
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import Settings from 'react-native-vector-icons/MaterialIcons';
import Celsius from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../utils/colors';
import Forecast, {ForecastList} from './components/ThreeDaysForecast';
import {
  fetchLocations,
  fetchWeatherForecast,
} from '../../../services/api/weather';
import { Routes } from "../../../navigator/routes";

const HomeScreen = ({navigation}: any) => {
  fetchWeatherForecast({city_name: 'istanbul', days: '7'}).then(data => {
    console.log('konum özellikleri', data);
  });

  const navigateCoffees = () => {
    navigation.navigate(Routes.Search);
  }

  return (
    <View>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <ImageBackground
        style={styles.container}
        source={require('../../../../assets/blue_sky.jpg')}>
        <View style={styles.tabBar}>
          <TouchableWithoutFeedback onPress={() => navigateCoffees()}>
            <AddIcon name={'add'} size={40} color={COLORS.white} />
          </TouchableWithoutFeedback>
          <Text style={styles.city_name}>Bayrampaşa</Text>
          <Settings
            name={'settings'}
            size={30}
            color={COLORS.white}
            style={styles.settings_icon}
          />
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.degree_area}>
            <View style={styles.degree_and_celsius}>
              <Text style={styles.degree}>33</Text>
              <Celsius
                name={'temperature-celsius'}
                size={30}
                color={COLORS.white}
                style={styles.celsius}
              />
            </View>
            <View style={styles.area}>
              <Text style={styles.weather}>Açık</Text>
              <View
                style={{
                  height: 40,
                  width: 120,
                  backgroundColor: 'lightblue',
                  borderRadius: 15,
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AddIcon name={'add'} size={20} style={{alignSelf: 'center'}} />
                <Text style={{fontSize: 20}}> HKE 26</Text>
              </View>
            </View>
          </View>
          <FlatList
            scrollEnabled={false}
            data={ForecastList}
            numColumns={1}
            renderItem={({item}) => (
              <Forecast
                icon={item.icon}
                text={item.text}
                weather={item.weather}
                day={item.day}
                night={item.night}
              />
            )}
          />
          <View
            style={{
              height: 60,
              width: '90%',
              backgroundColor: 'lightblue',
              borderRadius: 20,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: '5%',
            }}>
            <Text
              style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
              5 günlük hava durumu tahmini
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
