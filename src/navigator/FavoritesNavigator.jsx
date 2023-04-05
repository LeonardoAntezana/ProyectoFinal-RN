import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserIcon } from '../components';
import Colors from '../constants/Colors';

import FavoritesScreen from "../screens/Favorites/FavoritesScreen";

const Stack = createNativeStackNavigator();

const FavoritesNavigator = () => {
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
          name='Favorites'
          component={FavoritesScreen}
          />
        </Stack.Navigator>
    )
}

export default FavoritesNavigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.secondaryBlack,
  }
})