import { StyleSheet, SafeAreaView } from 'react-native';
import MainNavigator from './src/navigator/MainNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
