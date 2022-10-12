import React from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import AppScreen from './src/screens/AppScreen/AppScreen';
import ScreenHandler from './src/screens/ScreenHandler/ScreenHandler';


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <AppScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#F9FBFC'
    },
});

export default App;