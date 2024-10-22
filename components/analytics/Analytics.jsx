import React from "react";
import Charts from "../Charts";

export const AnalyticsView = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-sm text-gray-500">Total Leads</h4>
          <p className="text-2xl font-bold">{data.totalLeads}</p>
          <span className="text-green-500 text-sm">↑ 12% from last month</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-sm text-gray-500">Conversion Rate</h4>
          <p className="text-2xl font-bold">{data.conversionRate}%</p>
          <span className="text-red-500 text-sm">↓ 3% from last month</span>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-sm text-gray-500">Average Response Time</h4>
          <p className="text-2xl font-bold">{data.avgResponseTime}h</p>
          <span className="text-green-500 text-sm">↑ 25% improvement</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Performance Trends</h3>
        <Charts type="line" data={data.performanceData} />
      </div>
    </div>
  );
};
