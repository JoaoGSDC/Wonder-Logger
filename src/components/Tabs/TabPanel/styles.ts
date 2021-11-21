import dynamic from 'next/dynamic'
import styled from 'styled-components'

const TabPanel = dynamic(() => import('@mui/lab/TabPanel'), { ssr: false })

export const MUITabPanel = styled(TabPanel)`
  padding: 0 !important;
  @media (max-width: 576px) {
    padding: 16px 0 !important;
  }
`
