import React, {useCallback, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import Search from 'react-native-vector-icons/FontAwesome';
import MapIcon from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../utils/colors';
import {debounce} from 'lodash';
import {fetchLocations, fetchWeatherForecast} from '../../services/api/weather';
import {Location} from '../../services/api/response';
import {Routes} from '../../navigator/routes';
import {removeData, setData} from '../../storage';

const SearchScreen = ({navigation}: any) => {
  const [locations, setLocations] = useState<Location[]>([]);

  const handleLocation = async (loc: any) => {
    if (loc) {
      setLocations([]);
      try {
        const data = await fetchWeatherForecast({
          city_name: loc.name,
          days: '7',
        });

        if (data) {
          await removeData('weatherData');
          await setData('weatherData', loc.name);
          navigation.navigate(Routes.Home);
        } else {
          //console.log("fetchWeatherForecast'tan veri alınamadı.");
        }
      } catch (error) {
        //console.error('Hata:', error);
      }
    } else {
      //console.log('Geçersiz konum bilgisi.');
    }
  };

  const handleSearch = (value: any) => {
    if (value.length > 2) {
      fetchLocations({city_name: value}).then(data => {
        setLocations(data);
      });
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 800), []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.manage_cities}>Şehirleri yönet</Text>
      <ScrollView>
        <View style={styles.search_bar}>
          <Search
            name={'search'}
            size={25}
            color={COLORS.search_icon}
            style={styles.search_icon}
          />
          <TextInput
            onChangeText={handleTextDebounce}
            style={styles.input}
            placeholder={'Konum girin'}
            placeholderTextColor={COLORS.search_icon}
          />
        </View>
        {locations.length > 0 && (
          <View style={styles.search_results_container}>
            {locations.map((loc, index) => {
              let showBorder = index + 1 !== locations.length;
              let borderStyle1 = showBorder
                ? {borderBottomWidth: 2, borderColor: COLORS.border}
                : {};

              return (
                <TouchableOpacity
                  onPress={() => handleLocation(loc)}
                  key={index}
                  style={[styles.search_results_rows, {...borderStyle1}]}>
                  <MapIcon
                    name={'map-marker-alt'}
                    size={20}
                    color={COLORS.black}
                  />
                  <Text
                    style={styles.text}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {loc?.name}, {loc?.country}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
