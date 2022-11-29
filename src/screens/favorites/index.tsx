import React, {useState} from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Assets
import BackIcon from 'assets/svg/back.svg';
// Components
import Container from 'src/components/commons/container';
import ModalBottom from 'src/components/modalBottom';
import ArtItem from 'src/components/artItem';
// Hooks
import useFavoriteHook from 'src/hooks/useFavoriteHook';
// Services
import {ArtWorkInterface} from 'src/services/artworks/interface';
// Styles
import homeStyle from 'src/screens/home/style';

const Favorites = () => {
  const {favoriteArts, getFavorites} = useFavoriteHook();
  const [showArt, setShowArt] = useState<boolean>(false);
  const [artWorkSelected, setArtWorkSelected] =
    useState<null | ArtWorkInterface>(null);
  const navigation = useNavigation();
  return (
    <Container safeColor="white">
      <View
        style={[
          homeStyle.container,
          homeStyle.header,
          homeStyle.backContainer,
        ]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={homeStyle.back}>
          <BackIcon color="#222222" width={20} height={20} />
        </TouchableOpacity>
        <Text style={homeStyle.title}>My favorites art works</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={homeStyle.flatListContainer}
        data={favoriteArts}
        renderItem={({item}) => (
          <ArtItem
            item={item}
            setArtWorkSelected={setArtWorkSelected}
            setShowArt={setShowArt}
          />
        )}
        keyExtractor={item => item.title}
      />
      {artWorkSelected && (
        <ModalBottom
          onClose={() => {
            setShowArt(false);
            setArtWorkSelected(null);
            getFavorites();
          }}
          visible={showArt}
          artWork={artWorkSelected}
        />
      )}
    </Container>
  );
};

export default Favorites;
