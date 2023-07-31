import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Icon from "react-native-vector-icons/MaterialIcons"

const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Icon name="add" size={30} color="black" />
    </View>
  );
};

export default HomeScreen;
