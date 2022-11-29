import {StyleSheet} from 'react-native';
import colors from 'src/theme/colors';

const style = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 4,
    flexDirection: 'row',
    minHeight: 40,
  },
  inputContainer: {
    paddingHorizontal: 10,
    borderRadius: 4,
    color: colors.dark,
    fontSize: 12,
    flex: 1,
  },
  inputWithIcon: {
    flex: 0.9,
  },
  iconContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
