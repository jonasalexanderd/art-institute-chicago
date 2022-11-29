import React from 'react';
import {SafeAreaView, View, ViewStyle} from 'react-native';
// Style
import containerStyle from './style';

const Container = ({
  children,
  style,
  safeColor,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
  safeColor?: string;
}) => {
  return (
    <View style={[containerStyle.container, style]}>
      <SafeAreaView style={{backgroundColor: safeColor}} />
      {children}
    </View>
  );
};

export default Container;
