import { createContext, SetStateAction, useState } from 'react'

type SidebarContextType = {
  isExpanded: boolean
  setIsExpanded: React.Dispatch<SetStateAction<boolean>>
  dashboardTitle: string
  setDashboardTitle: React.Dispatch<SetStateAction<string>>
}

export const SidebarContext = createContext({} as SidebarContextType)

export const SidebarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [dashboardTitle, setDashboardTitle] = useState<string>()

  return (
    <SidebarContext.Provider
      value={{ isExpanded, setIsExpanded, dashboardTitle, setDashboardTitle }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
