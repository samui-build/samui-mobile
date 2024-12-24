import { useColorScheme } from '@/hooks/useColorScheme'
import {
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  BalooBhai2_700Bold,
  BalooBhai2_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/baloo-bhai-2'
import {
  FiraCode_300Light,
  FiraCode_400Regular,
  FiraCode_500Medium,
  FiraCode_600SemiBold,
  FiraCode_700Bold,
} from '@expo-google-fonts/fira-code'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { Text, View } from 'react-native'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded, error] = useFonts({
    HeaderRegular: BalooBhai2_400Regular,
    HeaderMedium: BalooBhai2_500Medium,
    HeaderSemiBold: BalooBhai2_600SemiBold,
    HeaderBold: BalooBhai2_700Bold,
    HeaderExtraBold: BalooBhai2_800ExtraBold,
    MonoLight: FiraCode_300Light,
    MonoRegular: FiraCode_400Regular,
    MonoMedium: FiraCode_500Medium,
    MonoSemiBold: FiraCode_600SemiBold,
    MonoBold: FiraCode_700Bold,
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  if (error) {
    console.error(`Error loading fonts: ${error}`)
    return (
      <View style={{ padding: 16, backgroundColor: 'white', gap: 16 }}>
        <Text style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>Error loading fonts:</Text>
        <Text style={{ fontFamily: 'monospace' }}>{error.message}</Text>
      </View>
    )
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  )
}
