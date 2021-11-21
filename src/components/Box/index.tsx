import dynamic from 'next/dynamic'

const Box = dynamic(() => import('@mui/material/Box'), {
  ssr: false
})

export default Box
