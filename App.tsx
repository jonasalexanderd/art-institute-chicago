import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import axios from 'axios';
import {API_URL} from '@env';

axios.defaults.baseURL = API_URL;

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <></>
  );
};

export default App;
