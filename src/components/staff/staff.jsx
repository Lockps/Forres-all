import Header from '../mainpage/headerstaff'
import "./staff.css";
import { useState } from 'react';
export default function App() {
  let table = [false, false, false, false, false, false, false, false, false, false, false, false, false, false,]
  let [tableData, setTableData] = useState([]);

  fetch("http://localhost:8080/gettable")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ERROR : ${response.status}`)
      }
      return response.json()
    }).then(input => {
      input.sort(function (a, b) {
        return a - b;
      })
      setTableData(input)
    })

  for (let i = 0; i < tableData.length; i++) {
    table[tableData[i]] = true;
  }

  return (
    <>
      <Header />
      <div className="ctner-stf">
        {tableData.map((data, index) => (
          <div onClick={() => {
            window.location.href = `/staff/menu?data=${encodeURIComponent(
              JSON.stringify({
                table: data,
                course: "premium"
              })
            )}`;
          }} style={{ cursor: 'pointer' }} key={index}>table {data}</div>
        ))}
      </div >

    </>
  );
}