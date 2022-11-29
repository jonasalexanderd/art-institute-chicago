import React from 'react';
import {ArtWorkInterface} from 'src/services/artworks/interface';
import homeStyle from '../../screens/home/style';
import {Image, Text, TouchableOpacity} from 'react-native';
import {IMAGE_BASE_URL} from '@env';

const ArtItem = ({
  item,
  setShowArt,
  setArtWorkSelected,
}: {
  item: ArtWorkInterface;
  setShowArt: (value: boolean) => void;
  setArtWorkSelected: (value: ArtWorkInterface) => void;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setShowArt(true);
        setArtWorkSelected(item);
      }}
      style={homeStyle.itemContainer}>
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
  );
};

export default ArtItem;
