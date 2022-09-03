import { useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import { EffectComposer, Noise } from '@react-three/postprocessing'

import { ScrollableGroup } from '@comp/controls'
import { Floor } from './Floor'
import FloorCard from './FloorCard'
import { useOnScreen } from '../../hooks'
import { Group } from 'three'

export interface IFloor {
  color: string
  windowTint: string
}

type Props = {
  floors: Array<IFloor>
}

const InfinityTower = ({ floors }: Props) => {
  const [scrollPose, setScrollPose] = useState(0)

  const handleScroll = () => {
    setScrollPose(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='infinity-tower'>
      <div className='infinity-tower-floors'>
        <Canvas camera={{ position: [-12, 1, 14], fov: 35, near: 1, far: 100 }}>
          <ScrollableGroup scroll={scrollPose}>
            <ambientLight intensity={0.5} />
            <pointLight position={[20, 30, 10]} />
            <pointLight position={[-10, -10, -10]} color='blue' />
            <spotLight position={[-2, 1, 32]} angle={0.2} intensity={1} />
            <ContactShadows scale={12} blur={4} opacity={1} far={100} position={[0, -0.001, 0]} />
          </ScrollableGroup>
          <ScrollableGroup scroll={scrollPose} rotationSpeed={0.28}>
            {floors.map((floor, idx) => {
              // const ref = useRef<Group | null>(null)
              // const isVisible = useOnScreen(ref)

              return (
                <Floor
                  position={[0, idx * 2, 0]}
                  rotation={[0, Math.PI * 0.08 * idx, 0]}
                  key={`__FL${idx}`}
                  color={floor.color}
                  windowsTint={floor.windowTint}
                />
              )
            })}
          </ScrollableGroup>
          <EffectComposer>
            <Noise opacity={0.08} />
          </EffectComposer>
        </Canvas>
      </div>
      {floors.map((floor, idx) => {
        const ref = useRef<HTMLDivElement>(null)
        const isVisible = useOnScreen(ref)

        return (
          <FloorCard
            key={`__FLC${idx}`}
            id={idx}
            title='Hello World'
            badgeColor={floor.color}
            ref={ref}
            visible={isVisible}
          />
        )
      })}
    </div>
  )
}

export default InfinityTower
