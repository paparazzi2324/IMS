import { BaggageClaim, BarChart4, Cable, ChevronLeft, FolderOpenDot, Home, HomeIcon, LucideHome, ShoppingBag, ShoppingBasket, ShoppingCart, Warehouse, WarehouseIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SupscriptionCard from '@/components/dashboard/SupscriptionCard';

export default function Sidebar() {
  return (
    <div className='w-60 min-h-screen bg-slate-800 text-slate-50 fixed'>
    {/* Top Part */}
    <div className="flex flex-col"></div>
    {/* Logo */}
    <Link href="#" className=" bg-slate-950 flex space-x-3 items-center py-3 px-2">
        <ShoppingCart/>
        <span className='font-semibold text-xl' >Inventory</span>
    </Link>
    {/* Links */}

    <nav className='flex flex-col gap-3 px-3 py-6'>
    <Link href='#' className='flex items-center space-x-2 bg-sky-500 text-state-50 p-2 rounded-md' >
        <LucideHome className='w-4 h-4'/>
        <span>Home</span>
    </Link>

    <button className=' p-2 flex items-center space-x-2' >
        <BaggageClaim className='w-4 h-4'/>
        <span>Inventory</span>
    </button>

    <button className='p-2 flex items-center space-x-2' >
        <ShoppingBasket className='w-4 h-4'/>
        <span>Sales</span>
    </button>

    <button className='p-2 flex items-center space-x-2' >
        <ShoppingBag className='w-4 h-4'/>
        <span>Purchases</span>
    </button>

    <Link href='#' className='p-2 flex items-center space-x-2' >
        <Cable className='w-4 h-4'/>
        <span>Intergrations</span>
    </Link>

    <Link href='#' className='p-2 flex items-center space-x-2' >
        <BarChart4 className='w-4 h-4'/>
        <span>Reports</span>
    </Link>

    <Link href='#' className='p-2 flex items-center space-x-2' >
        <FolderOpenDot className='w-4 h-4'/>
        <span>Documents</span>
    </Link>
    </nav>
    <SupscriptionCard/>


    {/* Buttom */}
    <div className="flex flex-col ">
    <button className=" bg-slate-950 flex space-x-3 items-center justify-center py-3 px-2">
        <ChevronLeft/>
    </button>
    </div>
    {/* Subscrption Card */}
    {/* Footer Icon */}
  </div>
  )
}

