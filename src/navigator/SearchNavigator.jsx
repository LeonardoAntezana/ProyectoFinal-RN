import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserIcon } from '../components';
import Colors from '../constants/Colors';

import SearchScreen from '../screens/Search/SearchScreen';

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
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
        name='Search'
        component={SearchScreen}
        />
    </Stack.Navigator>
  )
}

export default SearchNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.secondaryBlack,
  }
})