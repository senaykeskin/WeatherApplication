import {getData, setData} from '../storage';
import {fetchWeatherForecast} from '../services/api/weather';
import {STRINGS} from '../utils/strings';

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

export const getDegreeValue = async () => {
  const firstData = await getData('isDegree');
  let data;
  if (firstData === undefined) {
    data = '1';
    await setData('isDegre', data);
  } else {
    data = firstData;
  }
  return data;
};

export const max_temp = (props: any, isDegree: string) => {
  if (isDegree === '\u00B0F') {
    return props.day.maxtemp_f;
  } else {
    return props.day.maxtemp_c;
  }
};

export const min_temp = (props: any, isDegree: string) => {
  if (isDegree === '\u00B0F') {
    return props.day.mintemp_f;
  } else {
    return props.day.mintemp_c;
  }
};

export const getWindDirection = (props: any) => {
  switch (props) {
    case 'N':
      return {transform: [{rotate: '-45deg'}]};
    case 'NNE':
      return {transform: [{rotate: '-22.5deg'}]};
    case 'NE':
      return {transform: [{rotate: '0deg'}]};
    case 'ENE':
      return {transform: [{rotate: '22.5deg'}]};
    case 'E':
      return {transform: [{rotate: '45deg'}]};
    case 'ESE':
      return {transform: [{rotate: '67.5deg'}]};
    case 'SE':
      return {transform: [{rotate: '90deg'}]};
    case 'SSE':
      return {transform: [{rotate: '112.5deg'}]};
    case 'S':
      return {transform: [{rotate: '135deg'}]};
    case 'SSW':
      return {transform: [{rotate: '157.5deg'}]};
    case 'SW':
      return {transform: [{rotate: '180deg'}]};
    case 'WSW':
      return {transform: [{rotate: '202.5deg'}]};
    case 'W':
      return {transform: [{rotate: '225deg'}]};
    case 'WNW':
      return {transform: [{rotate: '247.4deg'}]};
    case 'NW':
      return {transform: [{rotate: '270deg'}]};
    case 'NNW':
      return {transform: [{rotate: '292.5deg'}]};
    default:
  }
};

export const getDayLabel = (dateString: string) => {
  const daysOfWeek = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};

export const getDateLabel = (index: number, date: string) => {
  switch (index) {
    case 0:
      return STRINGS.today;
    case 1:
      return STRINGS.tomorrow;
    default:
      return getDayLabel(date);
  }
};
