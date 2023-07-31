import * as React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './src/navigator/homeNavigator/HomeNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
