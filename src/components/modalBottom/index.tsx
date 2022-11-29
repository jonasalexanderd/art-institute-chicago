import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {IMAGE_BASE_URL} from '@env';
// Assets
import CloseIcon from 'assets/svg/close.svg';
import FavoriteIcon from 'assets/svg/favorite.svg';
// Hooks
import useFavoriteHook from 'src/hooks/useFavoriteHook';
// Services
import {ArtWorkInterface} from 'src/services/artworks/interface';
// Style
import modalStyle from './style';

const ModalBottom = ({
  visible,
  artWork,
  onClose,
}: {
  visible: boolean;
  artWork: ArtWorkInterface;
  onClose: () => void;
}) => {
  const {addToFavorite, removeToFavorite, favoriteArts} = useFavoriteHook();
  const isFavorite = favoriteArts.find(el => el.id === artWork.id);
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={modalStyle.container}>
        <TouchableOpacity onPress={onClose} style={modalStyle.closeButton}>
          <CloseIcon width={20} height={20} color="#ffffff" />
        </TouchableOpacity>
        <View style={modalStyle.content}>
          <Image
            style={modalStyle.image}
            source={{
              uri: `${IMAGE_BASE_URL.replace(
                '{identifier}',
                artWork.image_id,
              )}`,
            }}
          />
          <ScrollView contentContainerStyle={modalStyle.section}>
            <Text style={modalStyle.title}>{artWork.title}</Text>
            <Text style={modalStyle.artDescription}>
              {artWork.artist_display}
            </Text>
            <Text style={modalStyle.artDescription}>
              <Text style={modalStyle.descriptionTitle}>Description: </Text>
              {artWork.exhibition_history || '-'}
            </Text>
          </ScrollView>
          <TouchableOpacity
            onPress={async () =>
              isFavorite
                ? await removeToFavorite(artWork)
                : await addToFavorite(artWork)
            }
            style={[
              modalStyle.favoriteContainer,
              isFavorite ? modalStyle.favoriteContainerRemove : null,
            ]}>
            <Text
              style={[
                modalStyle.favoriteText,
                isFavorite ? modalStyle.favoriteTextRemove : null,
              ]}>
              {isFavorite ? 'remove' : 'add'} to favorite
            </Text>
            <FavoriteIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalBottom;
