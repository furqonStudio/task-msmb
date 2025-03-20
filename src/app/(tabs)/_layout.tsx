import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, Text, TouchableOpacity, View } from 'react-native'

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import CustomTabBar from '@/components/molecules/CustomTabBar'
import HomeIcon from '@/assets/icons/HomeIcon'
import ReportIcon from '@/assets/icons/ReportIcon'
import AnalyzeIcon from '@/assets/icons/AnalyzeIcon'
import ClientsIcon from '@/assets/icons/ClientsIcon'
import ProfileIcon from '@/assets/icons/ProfileIcon'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          position: 'absolute',
          bottom: 12,
          marginHorizontal: 18,
          backgroundColor: '#8B5A2B',
          borderRadius: 14,
          height: 66,
          paddingTop: 14,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <View className="items-center gap-1">
              <HomeIcon />
              <Text className="font-semibold text-[10px]">Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color }) => (
            <View className="items-center w-[120%] -mt-[0.5px]">
              <ReportIcon width={26} height={26} />
              <Text className="font-semibold text-[10px]">Reports</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="analyze"
        options={{
          title: 'Analyze',
          tabBarIcon: ({ focused }) => (
            <View className="size-[74px] flex justify-center items-center bg-[#FC754D] rounded-full border-4 border-white">
              <AnalyzeIcon />
              <Text className="font-semibold text-[10px]">Analyze</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="clients"
        options={{
          title: 'Clients',
          tabBarIcon: ({ color }) => (
            <View className="items-center gap-1">
              <ClientsIcon />
              <Text className="font-semibold text-[10px]">Clients</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <View className="items-center gap-1">
              <ProfileIcon />
              <Text className="font-semibold text-[10px]">Profile</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  )
}
