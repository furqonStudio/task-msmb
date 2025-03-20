import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import { useRouter } from 'expo-router'

export default function PageHeader({ title }: { title: string }) {
  const router = useRouter()

  return (
    <View className="flex-row">
      <TouchableOpacity className="w-10" onPress={() => router.back()}>
        <ArrowLeftIcon />
      </TouchableOpacity>

      <Text className="text-[20px] font-poppins-bold text-center flex-1">
        {title}
      </Text>

      <View className="w-10" />
    </View>
  )
}
