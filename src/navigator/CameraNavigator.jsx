import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Colors from "../constants/Colors";
import { UserIcon } from "../components";

import CameraScreen from "../screens/Camera/CameraScreen";

const Stack = createNativeStackNavigator();

const CameraNavigator = () => {
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
        name="Camera"
        component={CameraScreen}
        />
    </Stack.Navigator>
  )
}

export default CameraNavigator;

const styles = StyleSheet.create({
    header: {
      backgroundColor: Colors.secondaryBlack,
    }
  })