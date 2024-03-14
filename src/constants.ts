import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('8HL1gKN7yBb46W2YTBaNpJHMqdNZMmaj4XjpAFiS6rpN')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
 {
mint: new PublicKey("BwgMrcpHzRPiQjcN1L6j1LMtubCkyjA526EuGEJR9Yx2"),
symbol: 'PANDA',
name: 'PANDA',
image: "https://ipfs.io/ipfs/QmV99yK93awEhFzWq5zvUw916srnhKYBB75YFG12Rritdv",
decimals: 6,
baseWager: 1 * 1e6,
}
]
