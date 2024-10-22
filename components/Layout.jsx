"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Layout({
  children,
  title,
  showAddWidget = false,
  onAddWidget,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        <Header
          title={title}
          onAddWidget={showAddWidget ? onAddWidget : null}
        />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
