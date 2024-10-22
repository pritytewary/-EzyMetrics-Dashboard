import React from "react";

const widgetOptions = [
  { id: "performance", title: "Performance Overview", type: "bar" },
  { id: "leads", title: "Lead Trend", type: "line" },
  { id: "recent", title: "Recent Leads", type: "table" },
  { id: "summary", title: "Summary Stats", type: "stats" },
];

export const AddWidgetModal = ({ onClose, onAdd }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Add Widget</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {widgetOptions.map((widget) => (
          <button
            key={widget.id}
            onClick={() => {
              onAdd(widget);
              onClose();
            }}
            className="p-4 border rounded-lg hover:bg-blue-50 text-left"
          >
            <h4 className="font-medium">{widget.title}</h4>
            <p className="text-sm text-gray-500 mt-1">Click to add</p>
          </button>
        ))}
      </div>
    </div>
  </div>
);
