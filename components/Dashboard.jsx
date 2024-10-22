import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
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

// Dummy data for charts and leads
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

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const NavItem = ({ icon: Icon, text }) => (
    <div
      className={`flex items-center space-x-2 p-4 cursor-pointer hover:bg-blue-50 ${
        activeTab === text ? "bg-blue-100" : ""
      }`}
      onClick={() => setActiveTab(text)}
    >
      <Icon size={20} />
      <span>{text}</span>
    </div>
  );

  const Widget = ({ title, children }) => (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );

  const LeadModal = ({ lead, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Lead Details</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="font-medium">Name</label>
            <p>{lead.name}</p>
          </div>
          <div>
            <label className="font-medium">Email</label>
            <p>{lead.email}</p>
          </div>
          <div>
            <label className="font-medium">Status</label>
            <p>{lead.status}</p>
          </div>
          <div>
            <label className="font-medium">Source</label>
            <p>{lead.source}</p>
          </div>
          <div>
            <label className="font-medium">Date Added</label>
            <p>{lead.date}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg ${
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300`}
      >
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">EzyMetrics</h1>
        </div>
        <nav className="mt-4">
          <NavItem icon={LayoutDashboard} text="Dashboard" />
          <NavItem icon={Users} text="Leads" />
          <NavItem icon={BarChart2} text="Analytics" />
          <NavItem icon={FileText} text="Reports" />
          <NavItem icon={Settings} text="Settings" />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{activeTab}</h2>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <Plus size={20} />
                <span>Add Widget</span>
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Performance Widget */}
            <Widget title="Performance Overview">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="leads" fill="#3b82f6" name="Leads" />
                  <Bar
                    dataKey="conversions"
                    fill="#10b981"
                    name="Conversions"
                  />
                </BarChart>
              </ResponsiveContainer>
            </Widget>

            {/* Trend Widget */}
            <Widget title="Lead Trend">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="leads" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </Widget>

            {/* Leads Table Widget */}
            <Widget title="Recent Leads">
              <div className="overflow-x-auto">
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
                  <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg">
                    <Download size={20} />
                    <span>Export</span>
                  </button>
                </div>
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
                        <td className="p-2">{lead.source}</td>
                        <td className="p-2">{lead.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Widget>
          </div>
        </main>

        {/* Lead Modal */}
        {showLeadModal && selectedLead && (
          <LeadModal
            lead={selectedLead}
            onClose={() => {
              setShowLeadModal(false);
              setSelectedLead(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
