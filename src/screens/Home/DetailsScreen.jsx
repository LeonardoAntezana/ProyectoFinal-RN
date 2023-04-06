import { StyleSheet, Text, View } from 'react-native'

const DetailsScreen = ({route}) => {
  const {params} = route;
  console.log(params.id)
  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})