"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Widget } from "@/components/Widgets/Widgets";
import { AddWidgetModal } from "@/components/Widgets/AddWidgetModal";
import Charts from "@/components/Charts";
import { mockData } from "@/data/mock-data";

export default function HomePage() {
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  const [widgets, setWidgets] = useState([
    { id: "performance", title: "Performance Overview", type: "bar" },
    { id: "leads", title: "Lead Trend", type: "line" },
  ]);

  const handleAddWidget = (widget) => {
    setWidgets([...widgets, { ...widget, id: `${widget.id}-${Date.now()}` }]);
  };

  return (
    <Layout
      title="Dashboard"
      showAddWidget={true}
      onAddWidget={() => setShowAddWidgetModal(true)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            title={widget.title}
            onRemove={() =>
              setWidgets(widgets.filter((w) => w.id !== widget.id))
            }
          >
            <Charts type={widget.type} data={mockData.performanceData} />
          </Widget>
        ))}
      </div>

      {showAddWidgetModal && (
        <AddWidgetModal
          onClose={() => setShowAddWidgetModal(false)}
          onAdd={handleAddWidget}
        />
      )}
    </Layout>
  );
}
