"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");

  const handlePeriodChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedPeriod(event.target.value as string);
  };

  const series = [
    {
      name: "Sales",
      data: [44, 55, 41, 67, 22, 43, 65],
    },
    {
      name: "Revenue",
      data: [13, 23, 20, 8, 13, 27, 15],
    },
  ];

  const data = series[0].data.map((_, index) => ({
    day: ["M", "T", "W", "T", "F", "S", "S"][index],
    sales: series[0].data[index],
    revenue: series[1].data[index],
  }));

  return (
    <Card sx={{ width: "100%", boxShadow: 3 }}>
      <CardHeader
        title="Profit this week"
        action={
          <FormControl>
            <InputLabel id="select-period">Period</InputLabel>
            <Select
              labelId="select-period"
              value={selectedPeriod}
              // onChange={handlePeriodChange}
              label="Period"
              size="small"
              sx={{ width: 150 }}
            >
              <MenuItem value="This Week">This Week</MenuItem>
              <MenuItem value="Last Week">Last Week</MenuItem>
            </Select>
          </FormControl>
        }
      />
      <CardContent>
        <ResponsiveContainer width="100%" height={335}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" name="Sales" fill="#3C50E0" />
            <Bar dataKey="revenue" name="Revenue" fill="#80CAEE" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ChartTwo;
