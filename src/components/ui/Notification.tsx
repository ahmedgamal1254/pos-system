"use client"
import { useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const NotificationsComponent=() => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    
    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const notifications = [
        { id: 1, message: 'رسالة جديدة من العميل أحمد' },
        { id: 2, message: 'تم تحديث حالة الطلب #123' },
        { id: 3, message: 'تذكير: موعد الاجتماع غداً الساعة 10 صباحاً' },
      ];

    return (
        <>
        {/* Notifications Icon */}
        <button className="relative cursor-pointer" onClick={toggleNotification}>
            <FaBell className="text-white text-2xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {notifications.length}
            </span>
        </button>

        {/* Notifications Dropdown */}
        {isNotificationOpen && (
            <div className="absolute z-40 left-5 top-10 mt-2 bg-white text-gray-600 rounded-lg shadow-lg w-64 p-2 max-h-60 overflow-y-auto">
            <h3 className="font-bold p-2">الإشعارات</h3>
            <ul>
                {notifications.map((notification) => (
                <li key={notification.id} className="p-2 border-b text-sm hover:bg-blue-100 cursor-pointer">
                    {notification.message}
                </li>
                ))}
            </ul>
            </div>
        )}
        </>
    )
}

export default NotificationsComponent;