import dynamic from 'next/dynamic'

const Grid = dynamic(() => import('@mui/material/Grid'), { ssr: false })

export default Grid
