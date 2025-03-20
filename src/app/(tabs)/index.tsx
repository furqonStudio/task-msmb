import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ClientSection from '@/components/organisms/ClientSection'
import WeatherCard from '@/components/molecules/WeatherCard'
import SearchBar from '@/components/molecules/SearchBar'
import HomeHeader from '@/components/molecules/HomeHeader'
import { View } from 'react-native'
import ReportSection from '@/components/organisms/ReportSection'

const index = () => {
  return (
    <SafeAreaView className="px-5 flex-1 gap-3 bg-[#F9FBF8]">
      <View>
        <HomeHeader />
        <SearchBar />
      </View>
      <WeatherCard />
      <ClientSection />
      <ReportSection />
    </SafeAreaView>
  )
}

export default index
