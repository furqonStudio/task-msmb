import { View, Text } from 'react-native'
import BellIcon from '@/assets/icons/BellIcon'

export default function HomeHeader() {
  return (
    <View className="flex flex-row justify-between items-center">
      <View>
        <Text className="font-poppins text-[12px] -mb-1">Good Morning</Text>
        <Text className="font-poppins-bold text-[20px]">Demo Email</Text>
      </View>
      <View className="flex justify-center items-center relative size-[34px] bg-gray rounded-xl">
        <BellIcon color="black" />
        <View className="absolute right-2 top-2 bg-[#FE564B] size-2 rounded-full border-[#e2e8f0] border" />
      </View>
    </View>
  )
}
