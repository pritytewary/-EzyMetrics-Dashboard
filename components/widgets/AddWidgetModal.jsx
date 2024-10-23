import React from "react";
import { X } from "lucide-react";

const widgetOptions = [
  { id: "performance", title: "Performance Overview", type: "bar" },
  { id: "leads", title: "Lead Trend", type: "line" },
  { id: "recent", title: "Recent Leads", type: "table" },
  { id: "summary", title: "Summary Stats", type: "stats" },
];

export const AddWidgetModal = ({ onClose, onAdd }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg w-full max-w-md mx-auto">
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg sm:text-xl font-semibold">Add Widget</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {widgetOptions.map((widget) => (
            <button
              key={widget.id}
              onClick={() => {
                onAdd(widget);
                onClose();
              }}
              className="p-4 border rounded-lg hover:bg-blue-50 text-left transition-colors"
            >
              <h4 className="font-medium">{widget.title}</h4>
              <p className="text-sm text-gray-500 mt-1">Click to add</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);
