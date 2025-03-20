import { View, Text } from 'react-native'
import React from 'react'
import Button from '../atomics/Button'
import ReportCardList from '../molecules/ReportCardList'
import { useRouter } from 'expo-router'

export default function ReportSection() {
  const router = useRouter()

  return (
    <View>
      <Text className="text-[16px] font-poppins-bold">Reports</Text>
      <ReportCardList />
      <View className="flex self-end mt-3">
        <Button
          text="View All"
          gradient={['#FB724C', '#FE904B']}
          onPress={() => router.push('/reports')}
        />
      </View>
    </View>
  )
}
