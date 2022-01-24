import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {isEmpty} from 'lodash';

const Home = ({navigation}) => {
  const [chooseCoordinates, setChooseCoordinates] = useState({});

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('VideoList')}>Home</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 41.1716,
          longitude: 28.9859,
          latitudeDelta: 6.29,
          longitudeDelta: 15.9121,
        }}
        userLocationCalloutEnabled>
        <Marker
          onDragEnd={e => setChooseCoordinates(e?.nativeEvent?.coordinate)}
          draggable
          coordinate={{
            latitude: 41.1716,
            longitude: 28.9859,
            latitudeDelta: 6.29,
            longitudeDelta: 15.9121,
          }}
        />
      </MapView>
      {!isEmpty(chooseCoordinates) && (
        <View style={styles.coordinateView}>
          <Text style={styles.text}>Enlem: {chooseCoordinates?.latitude}</Text>
          <Text style={styles.text}>Boylam: {chooseCoordinates.longitude}</Text>
        </View>
      )}
      <View style={styles.buttonView}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            if (!isEmpty(chooseCoordinates)) {
              navigation.navigate('VideoList', {
                coordinate: chooseCoordinates,
              });
            } else {
              Alert.alert('Hata', 'Videoları görebilmek için konum seçiniz.', [
                {
                  text: 'Tamam',
                },
              ]);
            }
          }}>
          <Text style={styles.text}>Trend Videoları Getir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
