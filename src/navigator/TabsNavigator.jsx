import { StyleSheet, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabIconCustom } from '../components';
import Colors from '../constants/Colors'

import HomeNavigator from './HomeNavigator'; 
import SearchNavigator from './SearchNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import CameraNavigator from './CameraNavigator';

const { height } = Dimensions.get('screen');

const BottomTabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
    initialRouteName='Tab-home'
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
  }}
    >
      <BottomTabs.Screen
      name='Tab-home'
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <TabIconCustom 
          iconName='home-sharp'
          title='Home'
          tintColor={focused ? Colors.secondary : 'black'} 
          size={24} 
          />
        )
      }}
      />
      <BottomTabs.Screen
      name='Tab-search'
      component={SearchNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
        <TabIconCustom 
        iconName='search-outline'
        title='Search' 
        tintColor={focused ? Colors.secondary : 'black'}
        size={24} 
        />
        )
      }}
      />
      <BottomTabs.Screen
      name='Tab-favorites'
      component={FavoritesNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
        <TabIconCustom 
        iconName='md-star'
        title='Favorites' 
        tintColor={focused ? Colors.secondary : 'black'}
        size={24} 
        />
        )
      }}
      />
       <BottomTabs.Screen
      name='Tab-camera'
      component={CameraNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
        <TabIconCustom 
        iconName='camera'
        title='Camara' 
        tintColor={focused ? Colors.secondary : 'black'}
        size={24} 
        />
        )
      }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabsNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.primary,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height > 700 ? 80 : 70,
  },
})