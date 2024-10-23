"use client";

import React from "react";
import { Plus, Menu } from "lucide-react";

export default function Header({ title, onAddWidget, onMenuClick }) {
  return (
    <header className="bg-white shadow-sm p-4 sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 -ml-2 lg:hidden"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
          <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        </div>
        {onAddWidget && (
          <button
            className="inline-flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm md:text-base"
            type="button"
            onClick={onAddWidget}
          >
            <Plus size={20} />
            <span className="hidden sm:inline">Add Widget</span>
          </button>
        )}
      </div>
    </header>
  );
}
