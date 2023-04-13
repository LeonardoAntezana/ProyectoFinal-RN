import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserIcon } from '../components';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/Home/HomeScreen';
import DetailsScreen from '../screens/Home/DetailsScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const user = useSelector(state => state.user.name)
  return (
    <Stack.Navigator
      screenOptions={{
      headerTitle: 'Rick y Morty',
      headerStyle: styles.header,
      headerTintColor: Colors.primary,
      headerRight: () => <UserIcon letter={user[0]}/>
    }}
      >
        <Stack.Screen
        name='Home'
        component={HomeScreen}
        />
        <Stack.Screen
        name='Details'
        component={DetailsScreen}
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