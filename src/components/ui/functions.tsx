import Link from "next/link";

export function Card({ title, value, color }: { title: string; value: string; color: string }) {
    return (
      <div className={`p-4 rounded-lg shadow-sm ${color}`}>
        <h3 className="text-md font-semibold mb-1">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    );
  }


export function SidebarItem({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
    return (
      <Link
        href={href}
        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-blue-50 transition"
      >
        <span className="text-blue-500 text-2xl">{icon}</span>
        <span className='text-gray-600 text-lg'>{label}</span>
      </Link>
    );
  }