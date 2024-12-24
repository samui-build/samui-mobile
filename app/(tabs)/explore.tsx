import { AppText } from '@/components/app-text'
import { AppView } from '@/components/AppView'
import { Collapsible } from '@/components/Collapsible'
import { ExternalLink } from '@/components/ExternalLink'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { Image, Platform, StyleSheet } from 'react-native'

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <AppView style={styles.titleContainer}>
        <AppText type="title">Explore</AppText>
      </AppView>
      <AppText>This app includes example code to help you get started.</AppText>
      <Collapsible title="File-based routing">
        <AppText>
          This app has two screens: <AppText type="defaultSemiBold">app/(tabs)/index.tsx</AppText> and{' '}
          <AppText type="defaultSemiBold">app/(tabs)/explore.tsx</AppText>
        </AppText>
        <AppText>
          The layout file in <AppText type="defaultSemiBold">app/(tabs)/_layout.tsx</AppText> sets up the tab navigator.
        </AppText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <AppText type="link">Learn more</AppText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <AppText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <AppText type="defaultSemiBold">w</AppText> in the terminal running this project.
        </AppText>
      </Collapsible>
      <Collapsible title="Images">
        <AppText>
          For static images, you can use the <AppText type="defaultSemiBold">@2x</AppText> and{' '}
          <AppText type="defaultSemiBold">@3x</AppText> suffixes to provide files for different screen densities
        </AppText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <AppText type="link">Learn more</AppText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <AppText>
          Open <AppText type="defaultSemiBold">app/_layout.tsx</AppText> to see how to load{' '}
          <AppText style={{ fontFamily: 'SpaceMono' }}>custom fonts such as this one.</AppText>
        </AppText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <AppText type="link">Learn more</AppText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <AppText>
          This template has light and dark mode support. The <AppText type="defaultSemiBold">useColorScheme()</AppText>{' '}
          hook lets you inspect what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </AppText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <AppText type="link">Learn more</AppText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="App Font">
        <AppText>We configured some app fonts, this is what they look like:</AppText>
        {['AppBold', 'AppExtraBold', 'AppMedium', 'AppRegular', 'AppSemiBold'].map((fontName) => (
          <AppText key={fontName} style={{ fontFamily: fontName }}>
            {fontName}
          </AppText>
        ))}
      </Collapsible>
      <Collapsible title="Animations">
        <AppText>
          This template includes an example of an animated component. The{' '}
          <AppText type="defaultSemiBold">components/HelloWave.tsx</AppText> component uses the powerful{' '}
          <AppText type="defaultSemiBold">react-native-reanimated</AppText> library to create a waving hand animation.
        </AppText>
        {Platform.select({
          ios: (
            <AppText>
              The <AppText type="defaultSemiBold">components/ParallaxScrollView.tsx</AppText> component provides a
              parallax effect for the header image.
            </AppText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
