import type { Metadata } from 'next'
import { ReactNode } from 'react'
 
export const metadata: Metadata = {
  title: 'html tutorials',
  description: 'The absolute minimum to start your HTML projects',
}
 
export default function Layout({children}:{
    children: ReactNode
}) {
    return(
        <>
            {children}
        </>
    )
}