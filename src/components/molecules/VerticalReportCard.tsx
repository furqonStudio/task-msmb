import { View, Text } from 'react-native'
import React from 'react'
import CustomImage from '../atomics/Image'
import HouseIcon from '@/assets/icons/HouseIcon'
import { ReportCardItem } from '@/type/type'
import PaddyIcon from '@/assets/icons/PaddyIcon'
import Button from '../atomics/Button'
import CalendarIcon from '@/assets/icons/CalendarIcon'
import ReportIcon from '@/assets/icons/ReportIcon'
import LandSizeIcon from '@/assets/icons/LandSizeIcon'

type ReportCardProps = {
  data: ReportCardItem
}

export default function VerticalReportCard({ data }: ReportCardProps) {
  return (
    <View className="flex-row items-center gap-4 bg-white rounded-2xl p-2 overflow-hidden shadow-md shadow-dark-gray mb-2">
      <View className="w-44 rounded-xl overflow-hidden">
        <CustomImage source={data.image} />
        <View className="flex-row absolute">
          <View
            className="bg-primary p-1 rounded-lg"
            style={{
              borderWidth: 2,
              borderColor: 'white',
              top: 100,
              left: 120,
            }}
          >
            <ReportIcon />
          </View>
        </View>
      </View>

      <View className="flex-1">
        <View className="mb-[6px]">
          <Text className="font-poppins-bold text-[16px]">{data.name}</Text>
          <View>
            <View className="flex flex-row items-center gap-1">
              <PaddyIcon />
              <Text className="font-poppins text-[12px] ">{data.plot}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <LandSizeIcon />
              <Text className="font-poppins text-[12px] ">{data.landSize}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <HouseIcon />
              <Text className="font-poppins text-[12px]">{data.location}</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <CalendarIcon />
              <Text className="font-poppins text-[12px] ">{data.dateTime}</Text>
            </View>
          </View>
        </View>
        <View className="flex self-end">
          <Button text="View Report" />
        </View>
      </View>
    </View>
  )
}
