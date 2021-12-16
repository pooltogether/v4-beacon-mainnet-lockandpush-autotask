import { Relayer } from 'defender-relay-client'
import { beaconDrawLockAndNetworkTotalSupplyPush } from '@pooltogether/v4-autotask-lib'
import {mainnet as mainnetContractList } from '@pooltogether/v4-pool-data'

export async function handler(event: any) {
  const relayer = new Relayer(event);
  const config = {
    beaconChain: {
      chainId: 1,
      providerUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    allPrizePoolNetworkChains: [
      {
        chainId: 1,
        providerUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      },
      {
        chainId: 137,
        providerUrl: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      },
      {
        chainId: 43114,
        providerUrl: 'https://api.avax.network/ext/bc/C/rpc',
      }
    ]
  }

  try {
    const transactionPopulated = await beaconDrawLockAndNetworkTotalSupplyPush(mainnetContractList, config)
    if (transactionPopulated) {

      /**
       * Execute Transaction to push the Draw struct and TotalNetworkSupply to Ethereum Mainnet
       */
      let transactionSentToNetwork = await relayer.sendTransaction({
        data: transactionPopulated.data,
        to: transactionPopulated.to,
        gasLimit: 500000,
        speed: 'fast'
      });

      console.log('TransactionHash:', transactionSentToNetwork.hash)
    } else {
      throw new Error('DrawBeacon: Transaction not populated')
    }
  } catch (error) {
    console.log(error)
  }
}
