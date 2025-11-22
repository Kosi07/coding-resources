import type { Metadata } from 'next'
import { ReactNode } from 'react'
 
export const metadata: Metadata = {
  title: 'HTML Tutorials',
  description: 'The absolute Minimum required to start your HTML projects',
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