import dynamic from 'next/dynamic'
import styled from 'styled-components'

const MUITab = dynamic(() => import('@mui/material/Tab'), { ssr: false })

const MUITabList = dynamic(() => import('@mui/lab/TabList'), {
  ssr: false
})

export const Tab = styled(MUITab)`
  text-transform: none !important;
  height: 56px;
  margin-top: 4px;
`

export const TabList = styled(MUITabList)``
