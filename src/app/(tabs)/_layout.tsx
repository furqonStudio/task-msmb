import { Tabs } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

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
          tabBarIcon: ({ focused }) => (
            <View
              className="items-center gap-1"
              style={{ opacity: focused ? 1 : 0.6 }}
            >
              <HomeIcon color={focused ? 'white' : '#D3D3D3'} />
              <Text
                className="font-semibold text-[10px]"
                style={{ color: focused ? 'white' : '#D3D3D3' }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
          tabBarIcon: ({ focused }) => (
            <View
              className="items-center w-[120%]"
              style={{ opacity: focused ? 1 : 0.6 }}
            >
              <ReportIcon
                color={focused ? 'white' : '#D3D3D3'}
                width={24}
                height={24}
              />
              <Text
                className="font-semibold text-[10px]"
                style={{ color: focused ? 'white' : '#D3D3D3' }}
              >
                Reports
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="analyze"
        options={{
          title: 'Analyze',
          tabBarIcon: ({ focused }) => (
            <View className="size-[80px] flex justify-center items-center bg-[#FC754D] rounded-full border-4 border-white">
              <AnalyzeIcon color={focused ? 'white' : '#D3D3D3'} />
              <Text
                className="font-semibold text-[10px]"
                style={{ color: focused ? 'white' : '#D3D3D3' }}
              >
                Analyze
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="clients"
        options={{
          title: 'Clients',
          tabBarIcon: ({ focused }) => (
            <View
              className="items-center gap-1"
              style={{ opacity: focused ? 1 : 0.6 }}
            >
              <ClientsIcon color={focused ? 'white' : '#D3D3D3'} />
              <Text
                className="font-semibold text-[10px]"
                style={{ color: focused ? 'white' : '#D3D3D3' }}
              >
                Clients
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <View
              className="items-center gap-1"
              style={{ opacity: focused ? 1 : 0.6 }}
            >
              <ProfileIcon color={focused ? 'white' : '#D3D3D3'} />
              <Text
                className="font-semibold text-[10px]"
                style={{ color: focused ? 'white' : '#D3D3D3' }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  )
}
