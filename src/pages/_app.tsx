import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'

import GlobalStyle from '@styles/global'
import theme from '@styles/theme'

import { SidebarProvider } from '@contexts/SidebarContext'
import { AuthProvider } from '@contexts/AuthContext'

import DashboardLayout from '@layouts/DashboardLayout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  if (router.pathname !== '/login') {
    return (
      <AuthProvider>
        <SidebarProvider>
          <DashboardLayout>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
              <GlobalStyle />
            </ThemeProvider>
          </DashboardLayout>
        </SidebarProvider>
      </AuthProvider>
    )
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
