'use client';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/functions';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import DashboardCharts from '@/components/charts/chart';
import StoresTable from '@/components/table/table';
export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-right" dir="rtl">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto mr-60 mt-15">
            <StoresTable />
            <div className='space-y-1'></div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

