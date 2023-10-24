import React, {useEffect, useState} from 'react';
import {Dimensions, Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../utils/colors';
import Up from 'react-native-vector-icons/Feather';
import Down from 'react-native-vector-icons/Feather';
import {setData} from '../../storage';
import {getDegreeValue} from '../../constants';

const SettingsScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState('left');
  const [isDegree, setIsDegree] = useState<string>('');

  useEffect(() => {
    getDegreeValue().then(data => {
      data === '0' ? setIsDegree('\u00B0F') : setIsDegree('\u00B0C');
    });
  });

  const degree = async () => {
    setModalVisible(!isModalVisible);
    await setData('isDegree', '1');
    setIsDegree('\u00B0C');
  };

  const fahrenheit = async () => {
    setModalVisible(!isModalVisible);
    await setData('isDegree', '0');
    setIsDegree('\u00B0F');
  };

  const openModal = (position: string) => {
    setModalPosition(position);
    setModalVisible(true);
  };

  const handlePress = (event: any) => {
    const touchX = event.nativeEvent.pageX;
    touchX <= Dimensions.get('window').width / 2
      ? openModal('right')
      : openModal('left');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.settings}>Ayarlar</Text>
      <Text style={styles.units}>BİRİMLER</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handlePress}
        style={styles.temperature_container}>
        <Text style={styles.temperature}>Sıcaklık Birimleri</Text>
        <View style={styles.degree_area}>
          <Text style={styles.degree}>{isDegree}</Text>
          <View style={styles.arrow_area}>
            <Up name={'chevron-up'} size={15} color={COLORS.gray} />
            <Down name={'chevron-down'} size={15} color={COLORS.gray} />
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="none"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(!isModalVisible)}>
        <View
          style={[
            styles.modal_container,
            modalPosition === 'right' ? {right: 20} : {left: 20},
          ]}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={degree}
            style={styles.degree_button}>
            <Text style={styles.text_degree}>&#176;C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={fahrenheit}
            style={styles.fahrenheit_button}>
            <Text style={styles.text_fahrenheit}>&#176;F</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default SettingsScreen;
