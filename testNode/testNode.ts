import { launchTestNode } from "@fuel-ts/contract/test-utils"

const run = async () => {
  const launchedWithDefaultConfig = await launchTestNode()
  const { provider } = launchedWithDefaultConfig
  const { name } = await provider.fetchChain()
  console.log("Chain Name:", name)
  console.log("Test node running at:", launchedWithDefaultConfig.provider.url)
}

run()
