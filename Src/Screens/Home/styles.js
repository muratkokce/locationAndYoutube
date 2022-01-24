import {StyleSheet} from 'react-native';
import {FontSizeDict, wp, hp} from 'Helpers/Responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  coordinateView: {
    position: 'absolute',
    width: wp(60),
    height: wp(12.5),
    borderRadius: wp(5),
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 0,
  },
  buttonView: {
    position: 'absolute',
    width: wp(75),
    height: wp(12.5),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    bottom: hp(5),
  },
  text: {
    color: 'white',
    fontSize: FontSizeDict.fon13,
    fontWeight: 'bold',
  },
});
export default styles;
