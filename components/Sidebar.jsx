"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BarChart2,
  FileText,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, text: "Dashboard", href: "/" },
  { icon: Users, text: "Leads", href: "/leads" },
  { icon: BarChart2, text: "Analytics", href: "/analytics" },
  { icon: FileText, text: "Reports", href: "/reports" },
  { icon: Settings, text: "Settings", href: "/settings" },
];

export default function Sidebar({ isSidebarOpen }) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-2xl font-bold">My Dashboard</h1>
      </div>
      <nav className="mt-10">
        {navItems.map((item) => (
          <Link
            key={item.text}
            href={item.href}
            className={`flex items-center px-4 py-2 mt-5 rounded-lg ${
              pathname === item.href ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <item.icon size={20} />
            <span className="ml-4">{item.text}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
