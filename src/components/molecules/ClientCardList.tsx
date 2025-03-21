import { FlatList } from 'react-native'
import React from 'react'
import { clientCardData } from '@/data/data'
import ClientCard from './ClientCard'

export default function ClientCardList() {
  return (
    <FlatList
      data={clientCardData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ClientCard data={item} />}
      contentContainerStyle={{ gap: 10 }}
    />
  )
}
