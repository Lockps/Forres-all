import Header from '../mainpage/headeradmin'
import './admin.css'
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import courseData from "./data/courseData.json";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";
export default function App() {
  let data = {
    alluser: 200,
    allstaff: 15
  }
  let userData = [
    {
      name: "pachara",
      role: "chef",
      salary: 3000000,
      status: "online"
    },
    {
      name: "Lock",
      role: "คนเช็ดเท้า",
      salary: 5,
      status: "online"
    },
    {
      name: "mile",
      role: "chasier",
      salary: 3000000000,
      status: "online"
    },
  ]
  let sourceData = [
    {
      "label": "premium",
      "value": 1145,
      "price": 35000
    },
    {
      "label": "alaska",
      "value": 1120,
      "price": 46000
    },
    {
      "label": "dimsum",
      "value": 970,
      "price": 42000
    },
    {
      "label": "izakaya",
      "value": 1400,
      "price": 37000
    },
    {
      "label": "yakiniku",
      "value": 1254,
      "price": 30000
    },
    {
      "label": "stir",
      "value": 876,
      "price": 45000
    }
  ]
  return (
    <>
      <Header />
      <div className='bigcon'>

        <div className='container1'>
          <div className='alluser'>
            <p className='letter'>ALL USER</p>
            <p className='bignum'>{data.alluser}</p>
            <p className='letter'>ALL STAFF</p>
            <p className='bignum'>{data.allstaff}</p>
          </div>
          <div className='allincome'>
            <div style={{ width: "95%" }} className="dataCard customerCard">
              <Bar
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: "premium",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        '#845E00',
                      ],
                      borderRadius: 5,
                    }
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: sourceData.map((data) => data.value * data.price).reduce((acc, amount) => acc + amount).toLocaleString(),
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        <table className='mytable'>
          <th>NAME</th>
          <th>ROLE</th>
          <th>SALARY</th>
          <th>STATUS</th>
          {userData.map(row => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.role}</td>
              <td>{row.salary}</td>
              <td>{row.status}</td>
            </tr>
          ))}

        </table>

      </div>
    </>
  );
}
