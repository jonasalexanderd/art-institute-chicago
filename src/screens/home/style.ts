import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: colors.white,
    paddingBottom: 15,
  },
  title: {
    color: colors.dark,
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 20,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  flatListContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  itemContainer: {
    width: '100%',
    borderRadius: 4,
    paddingBottom: 15,
    backgroundColor: colors.white,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
  },
  artTitle: {
    fontSize: 20,
    paddingHorizontal: 20,
    color: colors.dark,
  },
  artDescription: {
    fontSize: 14,
    paddingHorizontal: 20,
    color: colors.grey,
  },
});

export default style;
