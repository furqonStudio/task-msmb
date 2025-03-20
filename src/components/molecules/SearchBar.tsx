import { View, TextInput } from 'react-native'
import { useState } from 'react'
import RoundedLocationIcon from '@/assets/icons/RoundedLocationIcon'
import SortIcon from '@/assets/icons/SortIcon'

export default function SearchBar() {
  const [search, setSearch] = useState('')

  return (
    <View className="flex flex-row items-center justify-between px-4 bg-gray rounded-2xl">
      <View className="flex flex-row items-center gap-1 flex-1">
        <RoundedLocationIcon width={20} height={20} color="#A1A1A1" />
        <TextInput
          className="text-[16px] font-poppins text-dark-gray flex-1"
          placeholder="Your location ..."
          placeholderTextColor="#A1A1A1"
          value={search}
          onChangeText={setSearch}
          keyboardType="default"
        />
      </View>

      <SortIcon />
    </View>
  )
}
