import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { clientCardData } from '@/data/data'
import VerticalClientCard from './VerticalClientCard'

export default function VerticalClientCardList() {
  return (
    <FlatList
      data={clientCardData}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <VerticalClientCard data={item} />}
      contentContainerStyle={{ gap: 10 }}
      nestedScrollEnabled
      scrollEnabled={false}
    />
  )
}
