import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import { MaterialIcons } from '@expo/vector-icons'
import VerticalClientCardList from '@/components/molecules/VerticalClientCardList copy'

export default function clients() {
  return (
    <SafeAreaView className="px-5 bg-[#F9FBF8]">
      <View className="flex-row">
        <View className="w-10">
          <ArrowLeftIcon />
        </View>

        <Text className="text-[20px] font-poppins-bold text-center flex-1">
          Clients
        </Text>

        <View className="w-10" />
      </View>
      <View className="flex-row items-center justify-between">
        <View className="flex flex-row items-center justify-between px-4 py-2 bg-gray rounded-2xl w-[90%]">
          <View className="flex flex-row items-center gap-1">
            <MaterialIcons size={20} name="search" color="#A1A1A1" />
            <Text className="text-[16px] font-poppins text-dark-gray">
              Search ...
            </Text>
          </View>
          <MaterialIcons size={20} name="cancel" color="#A1A1A1" />
        </View>
        <MaterialIcons size={32} name="filter-list" color={'black'} />
      </View>
      <VerticalClientCardList />
    </SafeAreaView>
  )
}
