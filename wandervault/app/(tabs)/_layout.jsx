import { View, Text } from 'react-native'
import React from 'react'

export default function Tablayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false
    }}>
        <Tabs.Screen name="mytrip"/>
        <Tabs.Screen name="discover"/>
        <Tabs.Screen name="profile"/>
    </Tabs>
  )
} 