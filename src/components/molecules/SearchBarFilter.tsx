import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function SearchBarFilter() {
  return (
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
  )
}
