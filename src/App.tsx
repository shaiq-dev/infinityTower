import InfinityTower, { IFloor } from './components/InfinityTower'

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

function App() {
  return (
    <div className='app'>
      <InfinityTower floors={floors} />
    </div>
  )
}

export default App
