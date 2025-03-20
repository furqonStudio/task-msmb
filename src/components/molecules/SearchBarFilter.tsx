import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function SearchBarFilter() {
  const [searchText, setSearchText] = useState('')

  return (
    <View className="flex-row items-center justify-between gap-2">
      <View className="flex-row items-center px-4 bg-gray rounded-2xl w-[90%]">
        <MaterialIcons size={20} name="search" color="#A1A1A1" />
        <TextInput
          className="text-[16px] font-poppins text-dark-gray flex-1 ml-2"
          placeholder="Search ..."
          placeholderTextColor="#A1A1A1"
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <MaterialIcons
            size={20}
            name="cancel"
            color="#A1A1A1"
            onPress={() => setSearchText('')}
            className="ml-2"
          />
        )}
      </View>
      <MaterialIcons size={32} name="filter-list" color={'black'} />
    </View>
  )
}
