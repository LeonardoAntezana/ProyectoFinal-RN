import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const TabIconCustom = ({iconName, title, tintColor, ...otherProps}) => {
  return (
    <View style={styles.item}>
      <Ionicons name={iconName} color={tintColor} {...otherProps}/>
      <Text style={{color: tintColor}}>{title}</Text>
    </View>
  )
}

export default TabIconCustom

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})