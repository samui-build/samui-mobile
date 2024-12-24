import { AppSafeAreaView } from '@/components/app-safe-area-view'
import { AppText } from '@/components/app-text'
import { AppView } from '@/components/AppView'
import { View } from 'react-native'

export default function TabFonts() {
  const fonts = [
    'HeaderRegular',
    'HeaderMedium',
    'HeaderSemiBold',
    'HeaderBold',
    'HeaderExtraBold',
    'MonoLight',
    'MonoRegular',
    'MonoMedium',
    'MonoSemiBold',
    'MonoBold',
  ]
  return (
    <AppSafeAreaView>
      <AppView style={{ padding: 16 }}>
        <AppText>Edit app/index.tsx to edit this screen.</AppText>
        {fonts.map((font) => (
          <View key={font} style={{ marginTop: 16 }}>
            <AppText style={{ fontFamily: font }}>{font}</AppText>
          </View>
        ))}
      </AppView>
    </AppSafeAreaView>
  )
}
