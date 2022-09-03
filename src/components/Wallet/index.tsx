import { useState, useEffect } from 'react'
import { useEthers } from '@usedapp/core'
import { Card } from '@mantine/core'

import Connect from './Connect'
import Account from './Account'

const Wallet = () => {
  const [loading, setLoading] = useState(false)
  const { activateBrowserWallet, account } = useEthers()

  useEffect(() => {
    if (loading && account) {
      setLoading(false)
      console.log('acc, ', account)
    }
  }, [account])

  const handleClick = () => {
    setLoading(true)
    activateBrowserWallet()
  }

  if (account) {
    return (
      <div className='wallet'>
        <Card shadow='md' sx={{ width: 220 }} p='xs'>
          <Account onClickHandler={handleClick} loading={loading} />
        </Card>
      </div>
    )
  }

  return (
    <div className='wallet'>
      <Card shadow='md' sx={{ width: 220 }}>
        <Connect onClickHandler={handleClick} loading={loading} />
      </Card>
    </div>
  )
}

export default Wallet
