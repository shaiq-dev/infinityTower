import { Button, Text, Grid, Group, ActionIcon } from '@mantine/core'
import { IconPlugConnected, IconCurrencyEthereum, IconPlugConnectedX } from '@tabler/icons'

type Props = {
  onClickHandler: () => void
  loading: boolean
}

const Account = ({ onClickHandler, loading }: Props) => {
  return (
    <>
      <Grid>
        <Grid.Col
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ width: 18, height: 18, marginRight: 10 }}>
            <IconPlugConnected width={18} height={18} color='#12B886' />
          </div>
          <Text size='sm' sx={{ lineHeight: 1 }} color='green'>
            Wallet Connected
          </Text>
          <ActionIcon variant='light' color='red'>
            <IconPlugConnectedX width={14} height={14} />
          </ActionIcon>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default Account
