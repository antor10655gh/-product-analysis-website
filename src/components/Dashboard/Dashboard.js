import React, { useEffect, useState } from "react";
import Chart from "../Chart/Chart";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => setDatas(json));
  }, []);
  return (
    <div>
      {datas.map((data) => (
        <Chart key={data.id} data={data}></Chart>
      ))}
    </div>
  );
};

export default Dashboard;
