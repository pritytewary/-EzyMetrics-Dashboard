"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  LayoutDashboard,
  Users,
  BarChart2,
  FileText,
  Settings,
  Plus,
  X,
  Download,
  Search,
} from "lucide-react";

const Charts = dynamic(() => import("./Charts"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] bg-gray-100 animate-pulse rounded-lg" />
  ),
});

const performanceData = [
  { month: "Jan", leads: 65, conversions: 40 },
  { month: "Feb", leads: 75, conversions: 45 },
  { month: "Mar", leads: 85, conversions: 55 },
  { month: "Apr", leads: 95, conversions: 60 },
  { month: "May", leads: 80, conversions: 50 },
];

const leadsData = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    status: "New",
    source: "Website",
    date: "2024-10-20",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    status: "Contact Made",
    source: "LinkedIn",
    date: "2024-10-19",
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike@example.com",
    status: "Qualified",
    source: "Referral",
    date: "2024-10-18",
  },
];

const NavItem = ({ icon: Icon, text, isActive, onClick }) => (
  <button
    className={`flex items-center space-x-2 p-4 w-full text-left hover:bg-blue-50 ${
      isActive ? "bg-blue-100" : ""
    }`}
    onClick={onClick}
  >
    <Icon size={20} />
    <span>{text}</span>
  </button>
);

const Widget = ({ title, children }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

export const LeadModal = ({ lead, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Lead Details</h3>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          type="button"
        >
          <X size={20} />
        </button>
      </div>
      <div className="space-y-4">
        {Object.entries(lead)
          .filter(([key]) => key !== "id")
          .map(([key, value]) => (
            <div key={key}>
              <label className="font-medium capitalize">{key}</label>
              <p>{String(value)}</p>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <Layout title="Dashboard" showAddWidget>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Widget title="Performance Overview">
          <div className="h-[300px] md:h-[400px]">
            <Charts type="bar" data={performanceData} />
          </div>
        </Widget>

        <Widget title="Lead Trend">
          <div className="h-[300px] md:h-[400px]">
            <Charts type="line" data={performanceData} />
          </div>
        </Widget>

        <Widget title="Recent Leads" className="lg:col-span-2">
          <div className="overflow-x-auto">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search leads..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
              <button
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg"
                type="button"
              >
                <Download size={20} />
                <span>Export</span>
              </button>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Status</th>
                    <th className="text-left p-2 hidden sm:table-cell">
                      Source
                    </th>
                    <th className="text-left p-2 hidden sm:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leadsData.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        setSelectedLead(lead);
                        setShowLeadModal(true);
                      }}
                    >
                      <td className="p-2">{lead.name}</td>
                      <td className="p-2">{lead.status}</td>
                      <td className="p-2 hidden sm:table-cell">
                        {lead.source}
                      </td>
                      <td className="p-2 hidden sm:table-cell">{lead.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Widget>
      </div>

      {showLeadModal && selectedLead && (
        <LeadModal
          lead={selectedLead}
          onClose={() => {
            setShowLeadModal(false);
            setSelectedLead(null);
          }}
        />
      )}
    </Layout>
  );
}
