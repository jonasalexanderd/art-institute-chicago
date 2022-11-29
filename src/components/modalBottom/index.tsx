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
        </View>
      </View>
    </Modal>
  );
};

export default ModalBottom;
