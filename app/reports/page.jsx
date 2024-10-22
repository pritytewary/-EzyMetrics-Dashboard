"use client";
import React from "react";
import Layout from "@/components/Layout";
import { ReportGenerator } from "@/components/Reports/ReportGenerator";

export default function ReportsPage() {
  return (
    <Layout title="Reports">
      <ReportGenerator />
    </Layout>
  );
}
