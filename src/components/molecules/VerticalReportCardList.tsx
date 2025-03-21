import { FlatList } from 'react-native'
import React from 'react'
import { reportCardData } from '@/data/data'
import VerticalReportCard from './VerticalReportCard'

export default function VerticalReportCardList() {
  return (
    <FlatList
      data={reportCardData}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <VerticalReportCard data={item} />}
      contentContainerStyle={{ gap: 10 }}
      nestedScrollEnabled
      scrollEnabled={false}
    />
  )
}
