"use client";
import React from "react";
import Layout from "@/components/Layout";

export default function SettingsPage() {
  return (
    <Layout title="Settings">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Email Notifications</label>
            <select className="w-full p-2 border rounded">
              <option value="all">All Notifications</option>
              <option value="important">Important Only</option>
              <option value="none">None</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Theme</label>
            <select className="w-full p-2 border rounded">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>
      </div>
    </Layout>
  );
}
