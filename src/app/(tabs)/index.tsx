import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View } from 'react-native'

import HomeHeader from '@/components/molecules/HomeHeader'
import SearchBar from '@/components/molecules/SearchBar'
import WeatherCard from '@/components/molecules/WeatherCard'
import ClientSection from '@/components/organisms/ClientSection'
import ReportSection from '@/components/organisms/ReportSection'

const HomePage = () => {
  return (
    <SafeAreaView className="container-style">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ gap: 12, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <HomeHeader />
          <SearchBar />
        </View>
        <WeatherCard />
        <ClientSection />
        <ReportSection />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage
