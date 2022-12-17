import React from 'react'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'

export const MainLayout = ({children}) => {
  return (
    <>
        <Header />
        <main>
            {children}
          </main>
        <Footer />
    </>
  )
}

