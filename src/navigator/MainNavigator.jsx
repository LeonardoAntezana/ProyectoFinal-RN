import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import AuthScreen from '../screens/AuthScreen'

const MainNavigator = () => {
  const user = useSelector(state => state.user.userID)
  return (
    <NavigationContainer>
      {/* {user ? <TabsNavigator/> : <AuthScreen/>} */}
      <TabsNavigator/>
    </NavigationContainer>
  )
}

export default MainNavigator;
