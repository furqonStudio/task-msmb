import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

interface ButtonProps {
  text: string
  gradient?: [string, string, ...string[]]
  bgColor?: string
  onPress?: () => void
}

export default function Button({
  text,
  gradient,
  bgColor = '#8B5A2B',
  onPress,
}: ButtonProps) {
  return gradient && gradient.length >= 2 ? (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="py-1 w-16 rounded-lg overflow-hidden flex justify-center items-center"
      >
        <Text className="text-white text-[9px] font-poppins-semibold">
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View
        className="py-1 px-3 rounded-lg flex justify-center items-center"
        style={{ backgroundColor: bgColor }}
      >
        <Text className="text-white text-[9px] font-poppins-semibold">
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
