import React from 'react';
import {SafeAreaView, View, ViewStyle} from 'react-native';
// Style
import containerStyle from './style';

const Container = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) => {
  return (
    <View style={[containerStyle.container, style]}>
      <SafeAreaView />
      {children}
    </View>
  );
};

export default Container;
