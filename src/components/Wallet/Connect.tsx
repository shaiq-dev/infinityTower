import { Button, Text, Grid } from '@mantine/core'
import { IconCurrencyEthereum } from '@tabler/icons'

import { ReactComponent as MetaMask } from '@src/assets/img/metamask.svg'

type Props = {
  onClickHandler: () => void
  loading: boolean
}

const Connect = ({ onClickHandler, loading }: Props) => {
  return (
    <>
      <Grid>
        <Grid.Col
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ width: 24, height: 24, marginRight: 10 }}>
            <MetaMask className='icon-md' />
          </div>
          <Text size='xs' color='dimmed' sx={{ lineHeight: 1 }}>
            To start minting, connect your MetaMask wallet
          </Text>
        </Grid.Col>
        <Grid.Col
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            rightIcon={<IconCurrencyEthereum />}
            color='orange'
            loaderPosition='right'
            loading={loading}
            onClick={onClickHandler}
            sx={{ fontWeight: 500 }}
          >
            Connect
          </Button>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default Connect
