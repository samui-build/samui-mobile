import React, { ReactNode } from 'react'
import { createSolanaClient, SolanaClient, SolanaClientConfig } from './solana-client'

const SolanaClientContext = React.createContext<SolanaClient>({} as SolanaClient)

export function SolanaClientProvider({ children, ...props }: SolanaClientConfig & { children: ReactNode }) {
  const client = createSolanaClient(props)

  return <SolanaClientContext.Provider value={client}>{children}</SolanaClientContext.Provider>
}

export function useSolanaClient() {
  return React.useContext(SolanaClientContext)
}
