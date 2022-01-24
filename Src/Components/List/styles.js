import {StyleSheet} from 'react-native';
import {FontSizeDict, wp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(5),
  },
  image: {
    width: wp(25),
    height: wp(25),
    resizeMode: 'contain',
  },
  title: {
    fontSize: FontSizeDict.font13,
    paddingHorizontal: wp(5),
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default styles;
