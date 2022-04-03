import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const Chart = ({ month, investment, sell, revenue }) => {
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={(month, investment, sell, revenue)}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default Chart;
