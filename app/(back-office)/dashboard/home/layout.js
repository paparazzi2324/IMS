import React from 'react'
import HomeNavBar from '@/components/dashboard/HomeNavBar';

export default function Layout({children}) {
  return (
    <div className=''>
        <HomeNavBar/>
    {children}
    </div>
  )
}
