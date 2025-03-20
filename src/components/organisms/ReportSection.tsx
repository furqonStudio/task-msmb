import { View, Text } from 'react-native'
import React from 'react'
import Button from '../atomics/Button'
import ReportCardList from '../molecules/ReportCardList'

export default function ReportSection() {
  return (
    <View>
      <Text className="text-[16px] font-poppins-bold">Reports</Text>
      <ReportCardList />
      <View className="flex self-end mt-3">
        <Button text="View All" gradient={['#FB724C', '#FE904B']} />
      </View>
    </View>
  )
}
