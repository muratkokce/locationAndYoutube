import {StyleSheet} from 'react-native';
import {FontSizeDict, wp, hp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageControlView: {
    position: 'absolute',
    width: wp(60),
    height: wp(12),
    borderRadius: wp(5),
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: hp(5),
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  buttonView: {
    width: wp(30),
    height: wp(12),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: FontSizeDict.fon13,
  },
});
export default styles;
