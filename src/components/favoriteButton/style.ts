import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 999,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.white,
    padding: 10,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default style;
