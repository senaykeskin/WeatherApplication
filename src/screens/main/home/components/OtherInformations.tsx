import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const BottomContainer = (props: any) => {
  return (
    <View style={styles.bottom_container}>
      <Text style={styles.features}>{props?.text}</Text>
      <Text style={styles.values}>{props?.value}</Text>
    </View>
  );
};

export default BottomContainer;
