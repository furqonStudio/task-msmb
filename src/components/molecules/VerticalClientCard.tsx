import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomImage from '../atomics/Image'
import LocationIcon from '@/assets/icons/LocationIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import Button from '../atomics/Button'
import { ClientCardItem } from '@/type/type'

type ClientCardProps = {
  data: ClientCardItem
}

export default function VerticalClientCard({ data }: ClientCardProps) {
  return (
    <TouchableOpacity className="flex-row items-center gap-4 bg-white rounded-2xl p-2 overflow-hidden shadow-md shadow-dark-gray mb-2">
      <View className="w-44 h-32 rounded-xl overflow-hidden">
        <CustomImage source={data.image} />
      </View>
      <View className="flex-1">
        <View className="mb-[6px]">
          <Text className="font-poppins-bold text-[16px]">{data.name}</Text>
          <View>
            <View className="flex flex-row items-center gap-1">
              <LocationIcon />
              <Text className="font-poppins text-[12px]">{data.location}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <PhoneIcon />
              <Text className="font-poppins text-[12px] ">{data.phone}</Text>
            </View>
          </View>
        </View>
        <View className="flex self-end">
          <Button text="Detail" />
        </View>
      </View>
    </TouchableOpacity>
  )
}
