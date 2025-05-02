import { SidebarItem } from "../ui/functions";
import {
  FaHome, FaBoxOpen, FaFileInvoice, FaUsers, FaCog,
  FaTruck, FaTags, FaChartLine, FaClipboardList,
  FaUndo, FaMoneyBill, FaUserShield
} from 'react-icons/fa';

const SidebarMob=()=>{
    return (
      <aside className="w-64 bg-white shadow-lg border-r text-sm p-4 space-y-4 mb-10">
        <div className="space-y-1">
          <h3 className="text-xs font-bold text-gray-500 px-2">الأساسية</h3>
          <SidebarItem icon={<FaHome />} label="الرئيسية" href="/dashboard" />
          <SidebarItem icon={<FaCog />} label="الإعدادات" href="/dashboard/settings" />
        </div>
      
        <div className="space-y-1">
          <h3 className="text-xs font-bold text-gray-500 px-2">إدارة المخزون</h3>
          <SidebarItem icon={<FaBoxOpen />} label="المخازن" href="/dashboard/stores" />
          <SidebarItem icon={<FaBoxOpen />} label="المنتجات" href="/dashboard/products" />
          <SidebarItem icon={<FaTags />} label="الفئات" href="/dashboard/categories" />
          <SidebarItem icon={<FaTruck />} label="الموردين" href="/dashboard/suppliers" />
          <SidebarItem icon={<FaClipboardList />} label="المشتريات" href="/dashboard/purchases" />
        </div>
      
        <div className="space-y-1">
          <h3 className="text-xs font-bold text-gray-500 px-2">إدارة المبيعات</h3>
          <SidebarItem icon={<FaFileInvoice />} label="الفواتير" href="/dashboard/invoices" />
          <SidebarItem icon={<FaUndo />} label="المرتجعات" href="/dashboard/returns" />
          <SidebarItem icon={<FaMoneyBill />} label="المدفوعات" href="/dashboard/payments" />
          <SidebarItem icon={<FaChartLine />} label="تقارير المبيعات" href="/dashboard/sales-reports" />
        </div>
      
        <div className="space-y-1">
          <h3 className="text-xs font-bold text-gray-500 px-2">العملاء والمستخدمون</h3>
          <SidebarItem icon={<FaUsers />} label="العملاء" href="/dashboard/customers" />
          <SidebarItem icon={<FaUserShield />} label="المستخدمون" href="/dashboard/users" />
        </div>

        <div className="space-y-2"></div>
    </aside>
    
    )
}

export default SidebarMob;