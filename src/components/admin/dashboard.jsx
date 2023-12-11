import Header from '../mainpage/headerdashboard'
import './dashboard.css'
import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

export default function App() {
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
  let courseData = [
    {
      "label": "Jan",

      "premium": 130,
      "alaska": 120,
      "dimsum": 110,
      "izakaya": 80,
      "yakiniku": 160,
      "stir": 80
    },
    {
      "label": "Feb",
      "premium": 100,
      "alaska": 80,
      "dimsum": 90,
      "izakaya": 180,
      "yakiniku": 260,
      "stir": 180
    },
    {
      "label": "Mar",
      "premium": 230,
      "alaska": 50,
      "dimsum": 80,
      "izakaya": 100,
      "yakiniku": 160,
      "stir": 120
    },
    {
      "label": "Apr",
      "premium": 86,
      "alaska": 45,
      "dimsum": 84,
      "izakaya": 245,
      "yakiniku": 133,
      "stir": 266
    },
    {
      "label": "May",
      "premium": 111,
      "alaska": 154,
      "dimsum": 165,
      "izakaya": 132,
      "yakiniku": 121,
      "stir": 210
    },
    {
      "label": "Jun",
      "premium": 125,
      "alaska": 213,
      "dimsum": 121,
      "izakaya": 76,
      "yakiniku": 154,
      "stir": 111
    },
    {
      "label": "Jul",
      "premium": 156,
      "alaska": 123,
      "dimsum": 158,
      "izakaya": 149,
      "yakiniku": 114,
      "stir": 188
    },
    {
      "label": "Aug",
      "premium": 121,
      "alaska": 156,
      "dimsum": 189,
      "izakaya": 180,
      "yakiniku": 290,
      "stir": 380
    },
    {
      "label": "Sep",
      "premium": 330,
      "alaska": 220,
      "dimsum": 80,
      "izakaya": 180,
      "yakiniku": 170,
      "stir": 185
    },
    {
      "label": "Oct",
      "premium": 135,
      "alaska": 145,
      "dimsum": 132,
      "izakaya": 167,
      "yakiniku": 89,
      "stir": 213
    },
    {
      "label": "Nov",
      "premium": 321,
      "alaska": 223,
      "dimsum": 125,
      "izakaya": 20,
      "yakiniku": 345,
      "stir": 212
    },
    {
      "label": "Dec",
      "premium": 330,
      "alaska": 420,
      "dimsum": 123,
      "izakaya": 222,
      "yakiniku": 57,
      "stir": 219
    }
  ]

  return (
    <>
      <Header />
      <div className='charts'><div className="App">
        <div className="dataCard revenueCard">
          <Line
            data={{
              labels: courseData.map((data) => data.label),
              datasets: [
                {
                  label: "premium",
                  data: courseData.map((data) => data.premium),
                  backgroundColor: "#845E00",
                  borderColor: "#845E00",
                },
                {
                  label: "alaska",
                  data: courseData.map((data) => data.alaska),
                  backgroundColor: "#0C6400",
                  borderColor: "#0C6400",
                }, {
                  label: "dimsum",
                  data: courseData.map((data) => data.dimsum),
                  backgroundColor: "#003564",
                  borderColor: "#003564",
                }, {
                  label: "izakaya",
                  data: courseData.map((data) => data.izakaya),
                  backgroundColor: "#3D0064",
                  borderColor: "#3D0064",
                }, {
                  label: "yakiniku",
                  data: courseData.map((data) => data.yakiniku),
                  backgroundColor: "#640043",
                  borderColor: "#640043",
                }, {
                  label: "stir",
                  data: courseData.map((data) => data.stir),
                  backgroundColor: "#640000",
                  borderColor: "#640000",
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                title: {
                  text: "Monthly Revenue & Cost",
                },
              },
            }}
          />
        </div>

        <div className="dataCard customerCard">
          <Bar
            data={{
              labels: courseData.map((data) => data.label),
              datasets: [
                {
                  label: "premium",
                  data: courseData.map((data) => data.premium),
                  backgroundColor: [
                    '#845E00',
                  ],
                  borderRadius: 5,
                }, {
                  label: "alaska",
                  data: courseData.map((data) => data.alaska),
                  backgroundColor: ['#0C6400',
                  ],
                  borderRadius: 5,
                }, {
                  label: "dimsum",
                  data: courseData.map((data) => data.dimsum),
                  backgroundColor: ['#003564',
                  ],
                  borderRadius: 5,
                }, {
                  label: "izakaya",
                  data: courseData.map((data) => data.izakaya),
                  backgroundColor: ['#3D0064',
                  ],
                  borderRadius: 5,
                }, {
                  label: "yakiniku",
                  data: courseData.map((data) => data.yakiniku),
                  backgroundColor: ['#640043',
                  ],
                  borderRadius: 5,
                }, {
                  label: "stir",
                  data: courseData.map((data) => data.stir),
                  backgroundColor: ['#640000',
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Sell each month",
                },
              },
            }}
          />
        </div>

        <div className="dataCard categoryCard">
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: sourceData.map((data) => data.value),
                  backgroundColor: [
                    '#845E00',
                    '#0C6400',
                    '#003564',
                    '#3D0064',
                    '#640043',
                    '#640000',
                  ],
                  borderColor: [
                    '#845E00',
                    '#0C6400',
                    '#003564',
                    '#3D0064',
                    '#640043',
                    '#640000',
                  ],
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Sell in 1 year",
                },
              },
            }}
          />
        </div>
      </div>
      </div>

      <div className='bottom'>

        {sourceData.map((x) => (<div className='bottom_item'>
          {x.label.toUpperCase()} <span className='totalsell'>{(x.price * x.value).toLocaleString()}</span>
        </div>))}

      </div>

    </>
  );
}

