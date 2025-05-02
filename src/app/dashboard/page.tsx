'use client';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import { Card } from '@/components/ui/functions';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import DashboardCharts from '@/components/charts/chart';
import SalesLineChart from '@/components/charts/sales';
import CategoriesPieChart from '@/components/charts/categories';
export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-right" dir="rtl">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto mr-60">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">مرحبًا بك 👋</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card title="إجمالي المبيعات" value="35,200 ﷼" color="bg-green-100 text-green-700" />
            <Card title="عدد الفواتير" value="120 فاتورة" color="bg-yellow-100 text-yellow-700" />
            <Card title="جميع العملاء" value="1,000 عميل" color="bg-blue-100 text-blue-700" />
            <Card title="العملاء الجدد" value="14 عميل" color="bg-purple-200 text-blue-700" />
            <Card title="المنتجات" value="14 منتج" color="bg-green-100 text-green-700" />
            <Card title="الفئات" value="14 قسم" color="bg-gray-100 text-gray-700" />
            <Card title="الموردون" value="10 موردين" color="bg-purple-100 text-purple-700" />
            <Card title="المخزون الحالي" value="1,200 وحدة" color="bg-orange-100 text-orange-700" />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 mt-10'>
            <div>
              <SalesLineChart />
            </div>
            <div>
              <CategoriesPieChart />
            </div>
          </div>

          <DashboardCharts />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

