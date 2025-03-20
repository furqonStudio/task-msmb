import { FlatList } from 'react-native'
import React from 'react'
import Card from './Card'
import { dataList } from '@/data/data'

export default function CardList() {
  return (
    <FlatList
      data={dataList}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Card data={item} />}
      contentContainerStyle={{ gap: 10 }}
    />
  )
}
