import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View} from 'react-native';
import axios from 'axios';
import {API_URL} from '@env';
// Navigator
import Navigation from 'src/navigation';
// Style
import containerStyle from 'src/components/commons/container/style';

axios.defaults.baseURL = API_URL;

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={containerStyle.container}>
      <Navigation />
    </View>
  );
};

export default App;
