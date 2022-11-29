import React from 'react';
import {Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {IMAGE_BASE_URL} from '@env';
// Assets
import SearchIcon from 'assets/svg/search.svg';
// Components
import Container from 'src/components/commons/container';
import Input from 'src/components/commons/input';
// Services
import ArtWorkServices from 'src/services/artworks';
import {ArtWorkInterface} from 'src/services/artworks/interface';
// Style
import homeStyle from './style';

const Home = () => {
  const [searchText, setSearchText] = React.useState<string>('');
  const [artWorks, setArtWorks] = React.useState<ArtWorkInterface[]>([]);
  React.useEffect(() => {
    ArtWorkServices.getArtWorks().then(setArtWorks);
  }, []);

  return (
    <Container style={homeStyle.container}>
      <Text style={homeStyle.title}>
        Welcome to Art Institute {'\n'} of Chicago
      </Text>
      <Input
        placeholder="Search"
        icon={<SearchIcon width={20} height={20} color="black" />}
        onChange={setSearchText}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={homeStyle.flatListContainer}
        data={artWorks}
        renderItem={({item}) => (
          <TouchableOpacity style={homeStyle.itemContainer}>
            <Image
              style={homeStyle.imageStyle}
              source={{
                uri: `${IMAGE_BASE_URL.replace('{identifier}', item.image_id)}`,
              }}
            />
            <Text style={homeStyle.artTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={homeStyle.artDescription} numberOfLines={1}>
              {item.thumbnail.alt_text}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.title}
      />
    </Container>
  );
};

export default Home;
