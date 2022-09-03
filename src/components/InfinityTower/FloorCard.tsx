import React, { forwardRef } from 'react'
import { Container, Card, Badge, Text } from '@mantine/core'

import { RenderWhen } from '../controls'

export type FloorCardProps = {
  visible: boolean
  id: number
  title: string
  badgeColor: string
  description?: string
  link?: string
}

const FloorCard = forwardRef(
  ({ id, title, badgeColor, visible }: FloorCardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
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
        ref={ref}
      >
        <RenderWhen when={visible}>
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
        </RenderWhen>
      </Container>
    )
  }
)

FloorCard.displayName = 'FloorCard'

export default FloorCard
