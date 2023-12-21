import React from 'react';
import Link from 'next/link';

export default function SubscriptionCard() {
    return (
        <div className="px-1 py-3">
            <div className='rounded-lg p-3 px-3 bg-slate-900'>
                <div className="border-b border-slate-600 pb-3">
                    <p className='text-xs border-l-2 border-yellow-500 pl-2'>
                        Your Premium plan&apos;s trial expires in {" "} <span className="text-orange-400 text-sm">
                            90 days.</span></p>
                </div>
                <div className="flex text-xs space-x-1 ">
                    <button className=' border-r border-slate-600 p-1'>Change Plan</button>
                    <Link href='#' className='p-1'>Upgrade</Link>
                </div>
            </div>
        </div>
    );
}
