import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../atomics/Button'
import LocationIcon from '@/assets/icons/LocationIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import CustomImage from '../atomics/Image'
import { CardItem } from '@/type/type'

type CardProps = {
  data: CardItem
}

export default function Card({ data }: CardProps) {
  return (
    <View className="bg-white w-[151px] h-[144px] rounded-[14px] overflow-hidden">
      {/* <Image source={{ uri: data.image }} className="w-full h-[80px]" /> */}
      <CustomImage />
      <View className="px-[10px] py-[6px]">
        <View className="mb-[6px]">
          <Text className="text-[12px] font-bold">{data.name}</Text>

          <View className="flex flex-row items-center gap-1">
            <LocationIcon />
            <Text className="text-[9px]">{data.location}</Text>
          </View>
          <View className="flex flex-row items-center gap-1">
            <PhoneIcon />
            <Text className="text-[9px]">{data.phone}</Text>
          </View>
        </View>
        <View className="self-end">
          <Button text="Detail" />
        </View>
      </View>
    </View>
  )
}
