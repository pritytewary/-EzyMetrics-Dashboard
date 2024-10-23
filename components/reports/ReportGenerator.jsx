"use client";

import React, { useState } from "react";

export const ReportGenerator = ({ data }) => {
  const [reportType, setReportType] = useState("pdf");
  const [dateRange, setDateRange] = useState("week");

  const generateReport = () => {
    console.log(`Generating ${reportType} report for ${dateRange}`);
    setTimeout(() => {
      alert("Report downloaded successfully!");
    }, 1000);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-6">Generate Report</h3>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Report Type
            </label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="pdf">PDF Report</option>
              <option value="csv">CSV Export</option>
              <option value="excel">Excel Export</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Date Range</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>
        </div>
        <button
          onClick={generateReport}
          className="w-full mt-4 bg-blue-500 text-white py-3 px-4 rounded hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Generate Report
        </button>
      </div>
    </div>
  );
};
