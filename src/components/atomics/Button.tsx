import { View, Text } from 'react-native'
import React from 'react'

export default function Button({ text }: { text: string }) {
  return (
    <View className="bg-primary py-1 w-16 rounded-lg flex justify-center items-center">
      <Text className="text-white text-[9px] font-poppins-semibold">
        {text}
      </Text>
    </View>
  )
}
