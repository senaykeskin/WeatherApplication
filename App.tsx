import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './src/navigator/homeNavigator/HomeNavigator';
import {useEffect} from 'react';
import {fetchDataTransfer} from './src/constants';

function App(): JSX.Element {
  useEffect(() => {
    fetchDataTransfer().then();
  });

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}
export default App;
