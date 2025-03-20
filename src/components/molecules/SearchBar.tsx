import { View, Text } from 'react-native'
import RoundedLocationIcon from '@/assets/icons/RoundedLocationIcon'
import SortIcon from '@/assets/icons/SortIcon'

export default function SearchBar() {
  return (
    <View className="flex flex-row items-center justify-between p-4 bg-gray rounded-2xl">
      <View className="flex flex-row items-center gap-1">
        <RoundedLocationIcon width={20} height={20} color="#A1A1A1" />
        <Text className="text-xs font-poppins text-dark-gray">
          Your location ...
        </Text>
      </View>
      <SortIcon />
    </View>
  )
}
