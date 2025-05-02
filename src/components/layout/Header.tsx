"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUserCircle } from 'react-icons/fa';
import NotificationsComponent from '../ui/Notification';
import SiderBarMobile from './SidebarMobile';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="scroll fixed w-full z-99 bg-blue-600 text-white px-6 py-4 shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold">لوحة التحكم</h1>
      
      {/* Icons and Dropdown */}
      <div className="flex items-center space-x-4">
        <div className='block sm:hidden'>
        <SiderBarMobile />
        </div>

        <NotificationsComponent />

        {/* Profile and Dropdown */}
        <div className="relative">
          <button onClick={toggleDropdown} className="flex items-center space-x-2 cursor-pointer">
            <FaUserCircle className="text-white text-2xl" />
            <span className='hidden lg:block'>اسم المستخدم</span>
          </button>

          {isDropdownOpen && (
            <div className="absolute left-4 mt-2 bg-white text-blue-600 rounded-lg shadow-lg w-48">
              <div className="flex items-center p-3 space-x-2 hover:bg-blue-100 cursor-pointer">
                <FaUserCircle className="text-xl" />
                <span>تعديل البيانات</span>
              </div>
              <div
                className="flex items-center p-3 space-x-2 hover:bg-blue-100 cursor-pointer"
                onClick={() => router.push('/logout')}
              >
                <FaUserCircle className="text-xl" />
                <span>تسجيل الخروج</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
