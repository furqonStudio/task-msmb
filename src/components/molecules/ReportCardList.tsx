import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { reportCardData } from '@/data/data'
import ReportCard from './ReportCard'

export default function ReportCardList() {
  return (
    <FlatList
      data={reportCardData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ReportCard data={item} />}
      contentContainerStyle={{ gap: 10 }}
    />
  )
}
