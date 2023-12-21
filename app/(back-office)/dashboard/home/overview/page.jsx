// ./app/(back-office)/dashboard/home/overview/page.jsx
// @ts-nocheck
// @ts-ignore
// @jsxImportSource client

import React from 'react';
import DashboardBanner from '@/components/dashboard/DashboardBanner';
import SalesOverview from '@/components/dashboard/SalesOverview';

export default function OverviewPage() {
  return (
    <div>
      <DashboardBanner/>
      <SalesOverview/>
    </div>
  );
}
