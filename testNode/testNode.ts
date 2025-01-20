import { launchTestNode } from "@fuel-ts/contract/test-utils"

const run = async () => {
  using launchedWithDefaultConfig = await launchTestNode()
  const { provider } = launchedWithDefaultConfig
  const { name } = await provider.fetchChain()
  console.log("Chain Name:", name)
}

run()
