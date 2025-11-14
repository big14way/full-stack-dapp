# Full-Stack-Dapp 🚀

This repository contains a basic decentralized application (DApp) that demonstrates the integration of Solidity, React, Hardhat, and the Sepolia testnet. The DApp allows users to interact with a simple smart contract deployed on the Sepolia testnet.

Visit [https://web3-dapp-wave.netlify.app/](https://web3-dapp-wave.netlify.app/) in your web browser to interact with the DApp.

## WalletConnect Integration 🔗

This DApp now supports **WalletConnect v2** powered by Reown AppKit, enabling connections to 300+ cryptocurrency wallets including:
- MetaMask (browser extension and mobile)
- Trust Wallet
- Rainbow Wallet
- Coinbase Wallet
- Ledger Live
- And many more!

### Features
- **Multi-Wallet Support**: Connect via MetaMask or any WalletConnect-compatible wallet
- **QR Code Modal**: Scan QR code with your mobile wallet for easy connection
- **Multi-Network Support**: Goerli, Sepolia, Ethereum Mainnet, Polygon, Mumbai, Base, Base Sepolia
- **Session Persistence**: Automatically reconnects to your last wallet
- **Modern UI**: Clean wallet connection button with wallet info display

### WalletConnect Project ID
Project ID: `1eebe528ca0ce94a99ceaa2e915058d7`

Get your own project ID at [Reown Cloud](https://cloud.reown.com/)

### Libraries Used
- `@reown/appkit@1.7.18` - Modern WalletConnect SDK
- `@reown/appkit-adapter-wagmi@1.7.18` - Wagmi adapter for AppKit
- `wagmi` - React hooks for Ethereum
- `viem` - TypeScript Ethereum library
- `@tanstack/react-query` - Data fetching and caching

## Prerequisites 🛠️

Make sure you have the following tools installed on your machine:

- Node.js 📦
- npm (Node Package Manager) 📦
- Hardhat ⚙️
- React ⚛️

## Installation 🚧

1. Clone the repository:

```bash
git clone https://github.com/your-username/simple-dapp.git
```

2. Navigate to the project directory:

```bash
cd simple-dapp
```

3. Install dependencies:

```bash
npm install
```

## Configuration ⚙️

1. Create a `.env` file in the project root and add your Sepolia testnet API key, also your metamask private key in your env:

```env
SEPOLIA_API_KEY=your_sepolia_api_key
PRIVATE_KEY=metamask_api_key
```

Replace `your_sepolia_api_key` with your actual Sepolia testnet API key.

## Usage 🚀

1. Compile the smart contract:

```bash
npx hardhat compile
```

2. Deploy the smart contract to Sepolia testnet:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

3. Start the React app:

```bash
npm run dev
```
