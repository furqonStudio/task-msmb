import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomImage from '../atomics/Image'
import HouseIcon from '@/assets/icons/HouseIcon'
import { ReportCardItem } from '@/type/type'
import PaddyIcon from '@/assets/icons/PaddyIcon'
import Button from '../atomics/Button'
import CalendarIcon from '@/assets/icons/CalendarIcon'
import ReportIcon from '@/assets/icons/ReportIcon'

type ReportCardProps = {
  data: ReportCardItem
}

export default function ReportCard({ data }: ReportCardProps) {
  return (
    <TouchableOpacity
      className="bg-white w-[151px] rounded-[14px] overflow-hidden shadow-md shadow-dark-gray mb-2"
      style={{ height: 170 }}
    >
      <CustomImage source={data.image} />
      <View className="flex-row absolute">
        <View
          className="bg-primary p-1 rounded-lg "
          style={{ borderWidth: 2, borderColor: 'white', top: 40, left: 8 }}
        >
          <ReportIcon />
        </View>
      </View>
      <View className="px-[10px] py-[6px]">
        <View className="mb-[6px] mt-1">
          <View className="flex-row justify-between">
            <Text className="font-poppins-bold text-[9px]">{data.name}</Text>
            <View className="bg-[#FCDA8D] px-2 rounded-full">
              <Text className="font-poppins-semibold text-[9px] ">
                {data.landSize} m
              </Text>
            </View>
          </View>
          <View>
            <View className="flex flex-row items-center gap-1">
              <PaddyIcon />
              <Text className="font-poppins text-[7px] ">{data.plot}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <PaddyIcon />
              <Text className="font-poppins text-[7px] ">{data.variety}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <HouseIcon />
              <Text className="font-poppins text-[7px]">{data.location}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <CalendarIcon />
              <Text className="font-poppins text-[7px] ">{data.dateTime}</Text>
            </View>
          </View>
        </View>
        <View className="flex self-end">
          <Button text="View Report" />
        </View>
      </View>
    </TouchableOpacity>
  )
}
