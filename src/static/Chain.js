export const Merlin = {
    id: 4200,
    name: 'Merlin Mainnet',
    iconUrl: 'https://miro.medium.com/v2/resize:fill:176:176/1*8MPVs56Z5F7i1wEdLOReuQ.jpeg',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Merlin Mainnet', symbol: 'BTC', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://rpc.merlinchain.io'] },
      public: { http: ['https://rpc.merlinchain.io'] },
    },
    blockExplorers: {
      default: { name: 'SnowTrace', url: 'https://scan.merlinchain.io' },
    },
    contracts: {
      multicall3: {
        address: '0xca11bde05977b3631167028862be2a173976ca11',
        blockCreated: 11_907_934,
      },
    },
  }