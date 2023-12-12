import { View, Text } from 'react-native'
import { Stack } from "expo-router";
import React from 'react'

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "DAY 1" }} />
      <Text>DayDetailsScreen</Text>
    </View>
  )
}

export default DayDetailsScreen