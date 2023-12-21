import React from 'react'
import Link from 'next/link'
import { Check, CheckCircle2 } from 'lucide-react'

export default function SalesActivityCard({item}) {
  return (
    <Link href={item.href}  className="shadow rounded-lg bg-white px-3 py-4 border border-slate-200 hover
    :border-blue-400 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
    <h4 className={`font-semibold text-2xl ${item.color}`}>{item.number}</h4>
    <small className='text-slate-500'>{item.unit}</small>
    <div className="flex items-center space-x-3 text-slate-500">
    <CheckCircle2 className='w-4 h-4'/> <span className='uppercase text-sm'>{item.title}</span>
     </div> </Link>
  )
}


