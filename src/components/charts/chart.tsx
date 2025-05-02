"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

// Sample data
const stockData = [
  { name: "منتج A", stock: 120 },
  { name: "منتج B", stock: 80 },
  { name: "منتج C", stock: 150 },
  { name: "منتج D", stock: 60 },
];

const salesData: Record<string, { month: string; sales: number; cost: number }[]> = {
  2023: [
    { month: "يناير", sales: 5000, cost: 3000 },
    { month: "فبراير", sales: 7000, cost: 4000 },
    { month: "مارس", sales: 6500, cost: 3500 },
    { month: "ديسمبر", sales: 10000, cost: 6000 },
  ],
  2024: [
    { month: "يناير", sales: 8000, cost: 5000 },
    { month: "فبراير", sales: 6000, cost: 3000 },
    { month: "مارس", sales: 9000, cost: 4500 },
    { month: "إبريل", sales: 11500, cost: 5500 },
    { month: "مايو", sales: 8000, cost: 4500 },
    { month: "يونيو", sales: 10000, cost: 3000 },
    { month: "يوليو", sales: 8500, cost: 4000 },
    { month: "أعسطس", sales: 7000, cost: 2000 },
    { month: "سبتمبر", sales: 15000, cost: 7500 },
    { month: "أكتوبر", sales: 19000, cost: 6500 },
    { month: "نوفمبر", sales: 25000, cost: 10000 },
    { month: "ديسمبر", sales: 11000, cost: 6500 },
  ],
};

const topSellingProducts = [
  { name: "منتج A", sales: 2000 },
  { name: "منتج B", sales: 1800 },
  { name: "منتج C", sales: 1600 },
  { name: "منتج D", sales: 1400 },
  { name: "منتج A", sales: 4000 },
  { name: "منتج B", sales: 3200 },
  { name: "منتج C", sales: 1500 },
  { name: "منتج D", sales: 1800 },
];

const customerInvoices = [
  { name: "عميل 1", invoices: 10 },
  { name: "عميل 2", invoices: 8 },
  { name: "عميل 3", invoices: 5 },
  { name: "عميل 4", invoices: 15 },
  { name: "عميل 5", invoices: 12 },
  { name: "عميل 6", invoices: 13 },
  { name: "عميل 7", invoices: 10 },
  { name: "عميل 8", invoices: 8 },
  { name: "عميل 9", invoices: 7 },
  { name: "عميل 10", invoices: 8 },
  { name: "عميل 11", invoices: 9 },
  { name: "عميل 12", invoices: 16 },
];

const DashboardCharts = () => {
  return (
    <div className="space-y-10 p-6 grid grid-cols-1 md:grid-cols-2 gap-2">
      {/* المنتجات في المخزون */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-500">المنتجات في المخزون</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stockData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* أعلى المنتجات مبيعًا */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-500">أعلى المنتجات مبيعًا</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topSellingProducts} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="sales" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* عدد فواتير العملاء */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-500">عدد فواتير العملاء</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={customerInvoices}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="invoices" fill="#ec4899" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* الأرباح مقابل المصروفات */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-gray-500">الأرباح مقابل المصروفات</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={salesData["2024"]}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f87171" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorSales)"
              name="المبيعات"
            />
            <Area
              type="monotone"
              dataKey="cost"
              stroke="#f87171"
              fillOpacity={1}
              fill="url(#colorCost)"
              name="المصروفات"
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default DashboardCharts;
