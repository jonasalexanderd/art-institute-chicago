import React from 'react';
import {TextInput, View} from 'react-native';
// Style
import inputStyle from './style';

const Input = ({
  icon,
  placeholder,
  onChange,
}: {
  icon?: React.ReactNode;
  placeholder: string;
  onChange: (value: string) => void;
}) => {
  const [value, setValue] = React.useState<string>('');
  return (
    <View style={[inputStyle.container]}>
      <View style={icon ? inputStyle.inputWithIcon : undefined}>
        <TextInput
          style={inputStyle.inputContainer}
          value={value}
          onChangeText={setValue}
          keyboardType="default"
          placeholder={placeholder}
          onBlur={() => onChange(value)}
        />
      </View>
      {icon && <View style={inputStyle.iconContainer}>{icon}</View>}
    </View>
  );
};

export default Input;
