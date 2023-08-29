import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    //console.log('Data kaydedildi.');
  } catch (error) {
    //console.log('storeData error: ', error);
  }
};

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
    return null;
  } catch (error) {
    //console.log('getData error: ', error);
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    //console.log(`'${key}' localden silindi`);
  } catch (error) {
    //console.error('removeData error', error);
  }
};

export {setData, getData, removeData};
