import { View, Text, Image } from 'react-native'
import React from 'react'

export default function WeatherCard() {
  return (
    <View className="flex flex-row justify-between items-center bg-primary h-[129px] rounded-2xl px-8 py-3">
      <View>
        <Text className="text-xs font-poppins text-white">This Day</Text>
        <Text className="text-xs font-poppins-bold text-white">
          Sunday, 13 December
        </Text>
        <Text className="text-[50px] font-poppins-bold text-white -mt-4 -mb-6">
          23°C
        </Text>
        <Text className="text-xs font-poppins text-white">
          Day 25°C, Night 25°C
        </Text>
      </View>
      <View className="flex gap-2">
        <Image
          source={require('assets/images/weather.png')}
          className="size-[70px] p-1"
          resizeMode="contain"
        />
        <Text className="text-xs font-poppins text-white">Thunderstorm</Text>
      </View>
    </View>
  )
}
