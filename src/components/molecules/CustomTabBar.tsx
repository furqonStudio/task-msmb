import { View, Platform } from 'react-native'
import { useLinkBuilder, useTheme } from '@react-navigation/native'
import { Text, PlatformPressable } from '@react-navigation/elements'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import HomeIcon from '@/assets/icons/HomeIcon'
import ReportIcon from '@/assets/icons/ReportIcon'
import AnalyzeIcon from '@/assets/icons/AnalyzeIcon'
import ClientsIcon from '@/assets/icons/ClientsIcon'
import ProfileIcon from '@/assets/icons/ProfileIcon'

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { colors } = useTheme()
  const { buildHref } = useLinkBuilder()

  const icons = {
    index: () => <HomeIcon />,
    reports: () => <ReportIcon />,
    analyze: () => <AnalyzeIcon />,
    clients: () => <ClientsIcon />,
    profile: () => <ProfileIcon />,
  }

  return (
    <View className="flex-row absolute bottom-7 mx-5 py-3 px-6 rounded-2xl bg-primary">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            className="items-center"
          >
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </PlatformPressable>
        )
      })}
    </View>
  )
}
