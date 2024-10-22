"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Search, Download } from "lucide-react";
import { mockData } from "@/data/mock-data";
import { LeadModal } from "@/components/Dashboard";

export default function LeadsPage() {
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  return (
    <Layout title="Leads">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search leads..."
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
          <button
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg"
            type="button"
          >
            <Download size={20} />
            <span>Export</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Source</th>
                <th className="text-left p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockData.leadsData.map((lead) => (
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
                  <td className="p-2">{lead.source}</td>
                  <td className="p-2">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
