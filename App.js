import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useFonts, RobotoCondensed_400Regular, RobotoCondensed_700Bold } from '@expo-google-fonts/roboto-condensed'
import * as SplashScreen from 'expo-splash-screen'
import MainNavigator from './src/navigator/MainNavigator';

import { init } from './src/db';

init();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold
  })

  useEffect(() => {
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <MainNavigator/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
