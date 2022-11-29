import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ArtWorkInterface} from 'src/services/artworks/interface';

const useFavoriteHook = () => {
  const FAVORITE_ART = 'favorite_art';
  const [favoriteArts, setFavoriteArts] = useState<ArtWorkInterface[]>([]);
  React.useEffect(() => {
    getFavorites();
  }, []);
  const getFavorites = () => {
    AsyncStorage.getItem(FAVORITE_ART).then(data => {
      setFavoriteArts(data ? (JSON.parse(data) as ArtWorkInterface[]) : []);
    });
  };
  const addToFavorite = async (value: ArtWorkInterface) => {
    const newFavoriteArts = [...favoriteArts, value];
    setFavoriteArts(newFavoriteArts);
    await AsyncStorage.setItem(FAVORITE_ART, JSON.stringify(newFavoriteArts));
  };

  const removeToFavorite = async (value: ArtWorkInterface) => {
    const newFavoriteArts = favoriteArts.filter(el => el.id !== value.id);
    setFavoriteArts(newFavoriteArts);
    await AsyncStorage.setItem(FAVORITE_ART, JSON.stringify(newFavoriteArts));
  };
  return {favoriteArts, addToFavorite, removeToFavorite, getFavorites};
};

export default useFavoriteHook;
