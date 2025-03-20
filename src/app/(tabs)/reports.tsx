import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, View } from 'react-native'
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import { MaterialIcons } from '@expo/vector-icons'
import VerticalReportCardList from '@/components/molecules/VerticalReportCardList'
import SearchBarFilter from '@/components/molecules/SearchBarFilter'
import PageHeader from '@/components/molecules/PageHeader'

export default function ReportsPage() {
  return (
    <SafeAreaView className="container-style">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ gap: 12, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <PageHeader title="Reports" />
        <SearchBarFilter />
        <VerticalReportCardList />
      </ScrollView>
    </SafeAreaView>
  )
}
