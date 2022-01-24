import MainAppNavigator from 'Navigations/RootNavigator';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import Store from 'Redux/Store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <MainAppNavigator />
      </View>
    </Provider>
  );
};

export default App;
