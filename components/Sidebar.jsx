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
  X,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, text: "Dashboard", href: "/" },
  { icon: Users, text: "Leads", href: "/leads" },
  { icon: BarChart2, text: "Analytics", href: "/analytics" },
  { icon: FileText, text: "Reports", href: "/reports" },
  { icon: Settings, text: "Settings", href: "/settings" },
];

export default function Sidebar({ onClose }) {
  const pathname = usePathname();

  return (
    <div className="w-64 h-full bg-white shadow-lg flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <h1 className="text-xl font-bold">EzyMetrics</h1>
        <button onClick={onClose} className="lg:hidden p-2">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        {navItems.map((item) => (
          <Link
            key={item.text}
            href={item.href}
            className={`flex items-center space-x-2 p-3 rounded-lg mb-2 transition-colors
              ${
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-50"
              }`}
          >
            <item.icon size={20} />
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
