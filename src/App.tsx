import InfinityTower, { IFloor } from './components/InfinityTower'
import Wallet from './components/Wallet'

const getFloors = (n: number) => {
  const floors: IFloor[] = [
    {
      color: '#da9ccc',
      windowTint: '1',
    },
    {
      color: '#20aea4',
      windowTint: '1',
    },
    {
      color: '#b03d40',
      windowTint: '1',
    },
    {
      color: '#da9ccc',
      windowTint: '1',
    },
    {
      color: '#20aea4',
      windowTint: '1',
    },
    {
      color: '#b03d40',
      windowTint: '1',
    },
    {
      color: '#da9ccc',
      windowTint: '1',
    },
    {
      color: '#20aea4',
      windowTint: '1',
    },
    {
      color: '#b03d40',
      windowTint: '1',
    },
  ]
  for (let i = 0; i < n; i++) {
    // floors.push({
    //   color: '#' + (((1 << 24) * Math.random()) | 0).toString(16),
    //   windowTint: '1',
    // })
  }
  return floors
}

function App() {
  return (
    <div className='app'>
      <InfinityTower floors={getFloors(10)} />
      <div className='panel'>
        <Wallet />
      </div>
    </div>
  )
}

export default App
