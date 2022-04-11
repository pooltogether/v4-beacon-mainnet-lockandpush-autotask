import { handler } from './handler'

// To run locally (this code will not be executed in Autotasks)
if (require.main === module) {
  const {
    RELAYER_API_KEY,
    RELAYER_API_SECRET,
    ETHEREUM_MAINNET_PROVIDER_URL: ethereumMainnetProviderURL,
    POLYGON_MAINNET_PROVIDER_URL: polygonMainnetProviderURL,
    AVALANCHE_MAINNET_PROVIDER_URL: avalancheMainnetProviderURL
  } = process.env;
  handler({
    apiKey: RELAYER_API_KEY,
    apiSecret: RELAYER_API_SECRET,
    secrets: {
      ethereumMainnetProviderURL,
      polygonMainnetProviderURL,
      avalancheMainnetProviderURL
    }
  })
    .then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); });
}

export function main() {

}