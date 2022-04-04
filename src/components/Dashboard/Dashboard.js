import {
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      id: 2,
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      id: 3,
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      id: 4,
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      id: 5,
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      id: 6,
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="container">
      <header className="my-5">
        <h1>
          Product <span style={{ color: "#32a2e3" }}>Chart</span>
        </h1>
        <div
          style={{
            border: "3px solid rgb(50, 162, 227)",
            width: "150px",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-2 my-3 my-lg-5">
        <div className="col">
          <LineChart
            className="linechart"
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="col">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={300} data={data}>
              <Pie
                data={data}
                dataKey="sell"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />

              <Pie
                data={data}
                dataKey="investment"
                nameKey="revenue"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
