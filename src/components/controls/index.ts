export const RenderWhen = ({ when, children }: { when: boolean; children: JSX.Element }) => {
  return when ? children : null
}

export * from './ScrollableGroup'
