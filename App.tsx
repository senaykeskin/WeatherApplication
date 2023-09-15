import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './src/navigator/homeNavigator/HomeNavigator';
import {useEffect} from 'react';
import {fetchDataTransfer} from './src/constants';

function App(): JSX.Element {
  useEffect(() => {
    fetchDataTransfer().then();
  });
import {setData, getData} from './src/storage';
import {useEffect} from 'react';

function App(): JSX.Element {
  useEffect(() => {
    const fetchData = async () => {
      const firstData = await getData('weatherData');
      if (firstData === null) {
        const locName = 'Ankara';
        await setData('weatherData', locName);
        console.log('aaa', await getData('weatherData'));
      }
    };
    fetchData().then();
  }, []);
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
export default App;
