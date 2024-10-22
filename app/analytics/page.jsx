"use client";
import React from "react";
import Layout from "@/components/Layout";
import { AnalyticsView } from "@/components/analytics/Analytics";
import { mockData } from "@/data/mock-data";

export default function AnalyticsPage() {
  return (
    <Layout title="Analytics">
      <AnalyticsView data={mockData.analyticsData} />
    </Layout>
  );
}
