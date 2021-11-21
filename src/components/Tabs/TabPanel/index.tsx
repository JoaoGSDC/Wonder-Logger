import { TabPanelProps as MUITabPanelProps } from '@mui/lab/TabPanel'

import { MUITabPanel } from './styles'

type TabPanelProps = MUITabPanelProps

const TabPanel: React.FC<TabPanelProps> = ({ children, ...rest }) => {
  return <MUITabPanel {...rest}>{children}</MUITabPanel>
}

export default TabPanel
