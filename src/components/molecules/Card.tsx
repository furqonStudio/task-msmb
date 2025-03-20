import { View, Text } from 'react-native'
import React from 'react'
import Button from '../atomics/Button'

export default function Card() {
  return (
    <View className="bg-white w-[151px]">
      <View className="p-3 ">
        <Text className="text-[9px]">Agus Hidayat</Text>
        <Text className="text-[9px]">Yogyakarta, Indonesia</Text>
        <Text className="text-[9px]">0909-909-9090</Text>
      </View>
      <Button text="Detail" />
    </View>
  )
}
