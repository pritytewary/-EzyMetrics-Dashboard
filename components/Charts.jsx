"use client";

import React, { useState, useEffect } from "react";
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

export default function Charts({ type, data }) {
  const [chartHeight, setChartHeight] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      setChartHeight(window.innerWidth < 768 ? 250 : 300);
    };

    // Set initial height
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (type === "bar") {
    return (
      <div className="w-full h-[250px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: "12px" }} tickMargin={8} />
            <YAxis tick={{ fontSize: "12px" }} tickMargin={8} />
            <Tooltip />
            <Bar
              dataKey="leads"
              fill="#3b82f6"
              name="Leads"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="conversions"
              fill="#10b981"
              name="Conversions"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="w-full h-[250px] md:h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tick={{ fontSize: "12px" }} tickMargin={8} />
          <YAxis tick={{ fontSize: "12px" }} tickMargin={8} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="leads"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
