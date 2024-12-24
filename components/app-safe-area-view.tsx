import { useThemeColor } from '@/hooks/useThemeColor'
import type { PropsWithChildren } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { SafeAreaViewProps } from 'react-native-safe-area-context'

type AppSafeAreaViewProps = SafeAreaViewProps &
  PropsWithChildren<{
    lightColor?: string
    darkColor?: string
  }>

export function AppSafeAreaView({ children, darkColor, lightColor, ...props }: AppSafeAreaViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background')
  return (
    <SafeAreaView {...props} style={[{ backgroundColor }, styles.container, props?.style]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
