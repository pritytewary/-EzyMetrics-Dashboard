import React from "react";
import { X } from "lucide-react";

export const Widget = ({ title, children, onRemove }) => (
  <div className="bg-white p-4 rounded-lg shadow relative">
    {onRemove && (
      <button
        onClick={onRemove}
        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Remove widget"
      >
        <X size={18} />
      </button>
    )}
    <h3 className="text-lg font-semibold mb-4 pr-8">{title}</h3>
    <div className="w-full overflow-x-auto">{children}</div>
  </div>
);
