import React, { ReactNode } from 'react'
import { ThemeProvider } from './NextThemesProvider'

interface Props {
  children: ReactNode
}

function Providers(props: Props) {
  const { children } = props

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default Providers
