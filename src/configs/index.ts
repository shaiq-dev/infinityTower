import { Config, Rinkeby } from '@usedapp/core'

export const DAppConfig: Config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: 'https://rinkeby.infura.io/v3/80cd53412ab646858e2940c97b0f0079',
  },
}
