import { Chase, ChaseDot } from './styles'

type LoadingProps = {
  size: string
  color: string
}

const Loading: React.FC<LoadingProps> = ({ size, color }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Chase size={size}>
        <ChaseDot color={color} />
        <ChaseDot color={color} />
        <ChaseDot color={color} />
        <ChaseDot color={color} />
        <ChaseDot color={color} />
      </Chase>
    </div>
  )
}

export default Loading
