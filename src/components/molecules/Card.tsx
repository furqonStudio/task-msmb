import { View, Text } from 'react-native'
import React from 'react'
import Button from '../atomics/Button'
import { Image } from 'expo-image'
import CustomImage from '../atomics/Image'

export default function Card() {
  return (
    <View className="bg-white w-[151px] h-[144px] rounded-[14px] overflow-hidden">
      <CustomImage />
      <View className="p-3">
        <View className="mb-2">
          <Text className="text-[9px]">Agus Hidayat</Text>
          <Text className="text-[9px]">Yogyakarta, Indonesia</Text>
          <Text className="text-[9px]">0909-909-9090</Text>
        </View>
        <View className="self-end">
          <Button text="Detail" />
        </View>
      </View>
    </View>
  )
}
