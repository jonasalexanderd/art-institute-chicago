import React, {useState} from 'react';
import {Text, FlatList, View} from 'react-native';
// Assets
import SearchIcon from 'assets/svg/search.svg';
// Components
import ArtItem from 'src/components/artItem';
import Container from 'src/components/commons/container';
import FavoriteButton from 'src/components/favoriteButton';
import Input from 'src/components/commons/input';
import ModalBottom from 'src/components/modalBottom';
// Services
import ArtWorkServices from 'src/services/artworks';
import {ArtWorkInterface} from 'src/services/artworks/interface';
// Style
import homeStyle from './style';

const Home = () => {
  const [showArt, setShowArt] = useState<boolean>(false);
  const [artWorkSelected, setArtWorkSelected] =
    useState<null | ArtWorkInterface>(null);
  const [artWorks, setArtWorks] = React.useState<ArtWorkInterface[]>([]);
  React.useEffect(() => {
    ArtWorkServices.getArtWorks().then(setArtWorks);
  }, []);

  /**
   * Get arts by value or not value
   * @param value
   */
  const getArts = async (value: string) => {
    if (value) {
      const data = await ArtWorkServices.getArtWorkByQuery(value);
      setArtWorks(data);
    } else {
      const data = await ArtWorkServices.getArtWorks();
      setArtWorks(data);
    }
  };
  return (
    <Container safeColor="white">
      <View style={[homeStyle.container, homeStyle.header]}>
        <Text style={homeStyle.title}>
          Welcome to Art Institute {'\n'} of Chicago
        </Text>
        <Input
          placeholder="Search"
          icon={<SearchIcon width={20} height={20} color="black" />}
          onChange={getArts}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={homeStyle.flatListContainer}
        data={artWorks}
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
          }}
          visible={showArt}
          artWork={artWorkSelected}
        />
      )}
      <FavoriteButton />
    </Container>
  );
};

export default Home;
