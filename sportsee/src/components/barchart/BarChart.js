import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    day: 1,
    kilogram: 80,
    calories: 240,
  },
  {
    day: 2,
    kilogram: 80,
    calories: 220,
  },
  {
    day: 3,
    kilogram: 81,
    calories: 280,
  },
  {
    day: 6,
    kilogram: 81,
    calories: 290,
  },
  {
    day: 4,
    kilogram: 80,
    calories: 160,
  },
  {
    day: 5,
    kilogram: 78,
    calories: 162,
  },
  {
    day: 6,
    kilogram: 76,
    calories: 390,
  },
];

export default function BarCharts() {
  return (
    <BarChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="#8884d8" />
      <Bar dataKey="calories" fill="#82ca9d" />
    </BarChart>
  );
}
