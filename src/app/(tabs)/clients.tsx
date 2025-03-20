import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'

export default function clients() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <ArrowLeftIcon />
        </View>
        <Text className="text-[20px] font-poppins-bold">Clients</Text>
      </View>
    </SafeAreaView>
  )
}
