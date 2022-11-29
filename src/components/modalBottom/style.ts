import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGradient,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {
    height: '90%',
    backgroundColor: colors.white,
    width: '100%',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  image: {
    width: '100%',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    height: 400,
    resizeMode: 'contain',
    backgroundColor: colors.dark,
  },
  closeButton: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  section: {
    padding: 20,
    paddingBottom: 20,
  },
  title: {
    color: colors.dark,
    fontSize: 20,
  },
  artDescription: {
    fontSize: 14,
    color: colors.grey,
    marginTop: 15,
  },
  descriptionTitle: {
    color: colors.dark,
  },
});

export default style;
