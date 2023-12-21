import React from 'react'

export default function InventorySummaryCard({item}) {
  return (
    <div  className="mb-4 shadow rounded-lg bg-white border border-slate-200
                            hover:border-blue-400 py-2
                            px-4 cursor-pointer flex items-center gap-3 justify-between
                            transition-all duration-300">
            <h2 className='uppercase text-sm text-slate-500 items-center'>{item.title}</h2>
            <h4 className='text-2xl '>{item.number}</h4>

            </div>
  )
}
