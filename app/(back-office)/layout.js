import React from 'react'
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';

export default function layout({children}) {
  return (
    <div className='flex'>
       <Sidebar/>
        <main className='ml-60 w-full bg-slate-100 min-h-screen'>
        <Header />
         {children}
        </main>
    </div>
  )
}

