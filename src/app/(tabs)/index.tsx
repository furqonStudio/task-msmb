import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/atomics/Button'
import Card from '@/components/molecules/Card'
import CardList from '@/components/organisms/CardList'

const index = () => {
  return (
    <SafeAreaView>
      <Text className="text-3xl">index</Text>
      <Button text="Detail" />
      <CardList />
    </SafeAreaView>
  )
}

export default index
