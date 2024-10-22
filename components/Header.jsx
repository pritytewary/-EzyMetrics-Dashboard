"use client";
import React from "react";
import { Plus } from "lucide-react";

export default function Header({ title, onAddWidget }) {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {onAddWidget && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            type="button"
            onClick={onAddWidget}
          >
            <Plus size={20} />
            <span>Add Widget</span>
          </button>
        )}
      </div>
    </header>
  );
}
