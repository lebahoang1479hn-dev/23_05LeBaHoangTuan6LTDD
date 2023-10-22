import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Four_A from './Four_A'
import Four_B from './Four_B'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="Four_A"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Four_A" component={Four_A} />
        {/*Stack.Screen các thành phần của màn hình  */}
        <Stack.Screen name="Four_B" component={Four_B} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
