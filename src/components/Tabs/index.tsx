import dynamic from 'next/dynamic'

import { Tab, TabList } from './styles'

const TabContext = dynamic(() => import('@mui/lab/TabContext'), { ssr: false })

export { Tab, TabContext, TabList }
