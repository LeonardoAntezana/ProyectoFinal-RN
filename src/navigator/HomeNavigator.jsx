import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserIcon } from '../components';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitle: 'Rick y Morty',
      headerStyle: styles.header,
      headerTintColor: Colors.primary,
      headerRight: () => <UserIcon letter='L'/>
    }}
      >
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        />
    </Stack.Navigator>
  )
}

export default HomeNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.secondaryBlack,
  }
})