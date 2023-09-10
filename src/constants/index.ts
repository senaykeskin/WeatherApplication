import {getData, setData} from '../storage';
import {fetchWeatherForecast} from '../services/api/weather';

export const apiKey = '42ce10d468d641cfa7d153147232907';

export const fetchDataTransfer = async () => {
  const firstData = await getData('weatherData');
  if (firstData === null) {
    const locName = 'Ankara';
    await setData('weatherData', locName);
  }
  return await fetchWeatherForecast({
    city_name: await getData('weatherData'),
    days: '7',
  });
};
