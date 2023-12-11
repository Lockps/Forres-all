import React from 'react';
import './history.css';
import Header from '../../mainpage/header'
function History() {

    let historyData = [
        { bookingid: 3213, name: 'John Doe', date: "24/6/17", course: "premium", people: 2, cost: 70000, table: 3 },
        { bookingid: 1322, name: 'Johnaa', date: "25/6/7", course: "premium", people: 3, cost: 105000, table: 4 },
    ]
    return (
        <><Header />
            <div className='history'>
                <table>
                    <thead>
                        <tr>
                            <th>BookingID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Course</th>
                            <th>People</th>
                            <th>Cost</th>
                            <th>Table</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map(row => (
                            <tr key={row.id}>
                                <td>{row.bookingid}</td>
                                <td>{row.name}</td>
                                <td>{row.date}</td>
                                <td>{row.course}</td>
                                <td>{row.people}</td>
                                <td>{row.cost}</td>
                                <td>{row.table}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></>
    );
}

export default History;
