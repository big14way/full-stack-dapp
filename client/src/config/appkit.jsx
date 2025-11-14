import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { polygon, polygonMumbai, mainnet, sepolia, goerli, base, baseSepolia } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import React from 'react'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '1eebe528ca0ce94a99ceaa2e915058d7'

const networks = [goerli, sepolia, mainnet, polygon, polygonMumbai, base, baseSepolia]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false
})

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata: {
    name: 'Chai DApp',
    description: 'Buy me a Chai - Decentralized Tipping Application',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  features: {
    analytics: true,
    email: false,
    socials: []
  }
})

const queryClient = new QueryClient()

export function AppKitProvider({ children }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
