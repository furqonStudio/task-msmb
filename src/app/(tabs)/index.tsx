import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/atomics/Button'
import Card from '@/components/molecules/Card'

const index = () => {
  return (
    <SafeAreaView>
      <Text className="text-3xl">index</Text>
      <Button text="Detail" />
      <Card />
    </SafeAreaView>
  )
}

export default index
