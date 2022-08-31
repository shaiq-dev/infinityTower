import { Container, Card, Badge, Text } from '@mantine/core'

export type FloorCardProps = {
  id: number
  title: string
  badgeColor: string
  description?: string
  link?: string
}

const FloorCard = ({ id, title, badgeColor }: FloorCardProps) => {
  return (
    <Container
      sx={{
        pointerEvents: 'none',
        maxWidth: 1200,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Card shadow='md' sx={{ width: 300 }}>
        <Badge
          className='floor-card-badge'
          style={{ '--fc-badge-color': badgeColor } as React.CSSProperties}
          variant='dot'
        >
          Floor #{id}
        </Badge>
        <Text weight={'bolder'}>{title}</Text>
        <Text size='sm' color='dimmed'>
          Hello World!
        </Text>
        <Text variant='link' component='a' href={'#'} target='_blank'>
          Link
        </Text>
      </Card>
    </Container>
  )
}

export default FloorCard
