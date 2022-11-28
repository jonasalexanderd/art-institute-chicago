import React from 'react';
import {TouchableOpacity} from 'react-native';
// Style
import buttonStyle from './style';

const Button = ({children}: {children: React.ReactNode}) => {
  return (
    <TouchableOpacity style={buttonStyle.container}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
