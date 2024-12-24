import { AppSafeAreaView } from '@/components/app-safe-area-view'
import { AppView } from '@/components/AppView'
import { useSolanaClient } from '@/lib/solana/solana-client-provider'
import { Button, StyleSheet } from 'react-native'

export default function HomeScreen() {
  const { rpc } = useSolanaClient()

  function test() {
    rpc
      .getVersion()
      .send()
      .then((res) => console.log(res))
  }

  return (
    <AppSafeAreaView>
      <AppView style={styles.page}>
        <Button title={'test'} onPress={test} />
      </AppView>
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    gap: 8,
    padding: 16,
  },
})
