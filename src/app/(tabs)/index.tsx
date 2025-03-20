import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/atomics/Button'
import Card from '@/components/molecules/Card'
import CardList from '@/components/organisms/CardList'
import BellIcon from '@/assets/icons/BellIcon'
import RoundedLocationIcon from '@/assets/icons/RoundedLocationIcon'
import SortIcon from '@/assets/icons/SortIcon'

const index = () => {
  return (
    <SafeAreaView className="mx-[18px]">
      <View className="flex flex-row justify-between items-center">
        <View>
          <Text className="font-normal text-[12px] -mb-1">Good Morning</Text>
          <Text className="font-bold text-[20px]">Demo Email</Text>
        </View>
        <View className="flex justify-center items-center relative size-[34px] bg-gray rounded-xl">
          <BellIcon color="black" />
          <View className="absolute right-2 top-2 bg-[#FE564B] size-2 rounded-full border-[#e2e8f0] border" />
        </View>
      </View>
      <View className="flex flex-row items-center justify-between bg-gray py-[7px] px-2">
        <View className="flex flex-row items-center gap-1">
          <RoundedLocationIcon />
          <Text className="text-xs">Your location ...</Text>
        </View>
        <SortIcon />
      </View>
      <View className="flex flex-row justify-between items-center bg-primary h-[129px] rounded-2xl px-8 py-3">
        <View>
          <Text className="text-xs font-normal text-white">This Day</Text>
          <Text className="text-xs font-bold text-white">
            Sunday, 13 December
          </Text>
          <Text className="text-[50px] font-bold text-white -my-2">23°C</Text>
          <Text className="text-xs font-normal text-white">
            Day 25°C, Night 25°C
          </Text>
        </View>
        <View className="flex gap-2">
          <Image
            source={require('assets/images/weather.png')}
            className="size-[70px] p-1"
            resizeMode="contain"
          />
          <Text className="text-xs font-normal text-white">Thunderstorm</Text>
        </View>
      </View>
      <CardList />
    </SafeAreaView>
  )
}

export default index
