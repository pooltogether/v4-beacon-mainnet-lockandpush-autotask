import { handler } from './handler'

// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  const {
    RELAYER_API_KEY: apiKey,
    RELAYER_API_SECRET: apiSecret,
    ETHEREUM_MAINNET_PROVIDER_URL: ethereumMainnetProviderURL,
    POLYGON_MAINNET_PROVIDER_URL: polygonMainnetProviderURL,
    AVALANCHE_MAINNET_PROVIDER_URL: avalancheMainnetProviderURL,
    OPTIMISM_MAINNET_PROVIDER_URL: optimismMainnetProviderURL
  } = process.env;
  handler({
    apiKey,
    apiSecret,
    secrets: {
      ethereumMainnetProviderURL,
      polygonMainnetProviderURL,
      avalancheMainnetProviderURL,
      optimismMainnetProviderURL
    }
  })
    .then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}

export function main() {

}