import { History, Settings } from 'lucide'
import { Bell, BookPlus, ChevronDown, HistoryIcon, LayoutGrid, Plus, PlusCircle, PlusCircleIcon, PlusIcon, SearchIcon, SettingsIcon, User, Users } from 'lucide-react'
import SearchInput from '@/components/dashboard/SearchInput';
import React from 'react'
import Image from 'next/image';

export default function header() {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200'>
        <div className="flex gap-3">
            {/* Recent activities */}
            <button>
            <HistoryIcon className='w-6 h-6'/>
            </button>
            {/* Search */}
            <SearchInput/>
        </div>
        <div className="flex items-center gap-3">
            {/* Plus Icon */}
            <div className="pr-2 border-r border-gray-300">
            <button className='p-1 rounded-lg bg-sky-500'>
            <Plus className='text-slate-50 w-4 h-4' />
            </button>
            </div>
            <div className="flex border-r border-gray-300 space-x-2">
            <button className='p-1 rounded-lg hover:bg-slate-200'>
            <Users className='text-slate-900 w-4 h-4' />
            </button>

            <button className='p-1 rounded-lg hover:bg-slate-200'>
            <Bell className='text-slate-900 w-4 h-4' />
            </button>

            <button className='p-1 rounded-lg hover:bg-slate-200'>
            <SettingsIcon className='text-slate-900 w-4 h-4' />
            </button>
            </div>
            {/*  */}
            <div className='flex gap-3'>
                <button className='flex items-center'><span>Garat</span>
                <ChevronDown className='w-4 h-4'/>
                </button>
                <button>
                    <Image src="/user2.png"
                    alt='user image' width={96} height={96}
                    className=' w-8 h-8 rounded-full border border-zinc-400'/>
                </button>
                <button>
                    <LayoutGrid className='w-6 h-6 text-slate-900'/>
                </button>
            </div>
            {/*  */}
        </div>

    </div>
  )
}

