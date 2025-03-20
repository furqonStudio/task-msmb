import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../atomics/Button'
import LocationIcon from '@/assets/icons/LocationIcon'
import PhoneIcon from '@/assets/icons/PhoneIcon'
import CustomImage from '../atomics/Image'
import { ClientCardItem } from '@/type/type'

type ClientCardProps = {
  data: ClientCardItem
}

export default function ClientCard({ data }: ClientCardProps) {
  return (
    <TouchableOpacity className="bg-white w-[151px] h-[144px] rounded-[14px] overflow-hidden shadow-md shadow-dark-gray mb-2">
      <CustomImage source={data.image} />
      <View className="px-[10px] py-[6px]">
        <View className="mb-[6px]">
          <Text className="font-poppins-bold text-[12px]">{data.name}</Text>
          <View>
            <View className="flex flex-row items-center gap-1">
              <LocationIcon />
              <Text className="font-poppins text-[10px]">{data.location}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <PhoneIcon />
              <Text className="font-poppins text-[10px] ">{data.phone}</Text>
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
