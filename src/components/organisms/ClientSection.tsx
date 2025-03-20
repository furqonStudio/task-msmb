import { View, Text } from 'react-native'
import React from 'react'
import CardList from '../molecules/CardList'
import Button from '../atomics/Button'

export default function ClientSection() {
  return (
    <View>
      <Text className="text-[16px] font-poppins-bold">Clients</Text>
      <CardList />
      <View className="flex self-end mt-3">
        <Button text="View All" gradient={['#FB724C', '#FE904B']} />
      </View>
    </View>
  )
}
