import { View, Text } from 'react-native'
import React from 'react'
import Button from '../atomics/Button'
import { useRouter } from 'expo-router'
import ClientCardList from '../molecules/ClientCardList'

export default function ClientSection() {
  const router = useRouter()

  return (
    <View>
      <Text className="text-[16px] font-poppins-bold">Clients</Text>
      <ClientCardList />
      <View className="flex self-end mt-3">
        <Button
          text="View All"
          gradient={['#FB724C', '#FE904B']}
          onPress={() => router.push('/clients')}
        />
      </View>
    </View>
  )
}
