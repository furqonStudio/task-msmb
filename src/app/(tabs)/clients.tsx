import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import { MaterialIcons } from '@expo/vector-icons'
import VerticalClientCardList from '@/components/molecules/VerticalClientCardList copy'
import SearchBarFilter from '@/components/molecules/SearchBarFilter'
import PageHeader from '@/components/molecules/PageHeader'

export default function ClientsPage() {
  return (
    <SafeAreaView className="container-style">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ gap: 12, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <PageHeader title="Clients" />
        <SearchBarFilter />
        <VerticalClientCardList />
      </ScrollView>
    </SafeAreaView>
  )
}
