import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Assets
import FavoriteIcon from 'assets/svg/favorite.svg';
// Styles
import favoriteButtonStyle from './style';
import Router from 'src/navigation/router';

const FavoriteButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(Router.FavoriteScreen as never)}
      style={favoriteButtonStyle.container}>
      <FavoriteIcon />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
