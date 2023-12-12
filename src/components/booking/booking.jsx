import "./booking.css";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Header from '../mainpage/header'

function App() {
	const searchParams = new URLSearchParams(window.location.search);
	const receivedData = JSON.parse(
		decodeURIComponent(searchParams.get("data") || "{}")
	);
	let [table, setTable] = useState([true, true, true, true, true, true, true, true, true, true, true, true, true, true]);
	let avialable_table = ["../src/assets/4ch.png", "../src/assets/6ch.png"];
	let unavialable_table = ["../src/assets/already4.png", "../src/assets/already6.png"];
	let reserved = receivedData.table_now
	let full = [true, true, true, true, true, true, true, true, true, true, true, true, true, true];
	for (let i = 0; i <= reserved.length; i++) {
		full[reserved[i]] = false;
	}
	let newtable = [true, true, true, true, true, true, true, true, true, true, true, true, true, true]
	function setimg(i) {
		newtable[i] = !table[i];
		setTable(newtable);
	}
	let [bookingData, setBookingData] = useState({})
	useEffect(() => {
		for (let i = 0; i < table.length; i++) {
			if (table[i] == false) {
				setBookingData(
					{
						table: i,
						name: receivedData.name ? receivedData.name : "",
						date: receivedData.date,
						time: receivedData.time,
						car: receivedData.car,
						people: receivedData.people,
						course: receivedData.course,
					})
			}
		}
	}, [table]);

	return (
		<>
			<Header />
			<div className="reserve">
				<form action="">
					<table className="alltable">
						<tr>
							<td>
								<img onClick={() => { setimg(1) }} className="t4" src={full[1] && table[1] ? avialable_table[0] : unavialable_table[0]} />
							</td>
							<td>
								<img onClick={() => { setimg(2) }} className="t4" src={full[2] && table[2] ? avialable_table[0] : unavialable_table[0]} />
							</td>
							<td>
								<img onClick={() => { setimg(3) }} className="t4" src={full[3] && table[3] ? avialable_table[0] : unavialable_table[0]} />
							</td>
							<td>
								<img onClick={() => { setimg(4) }} className="t4" src={full[4] && table[4] ? avialable_table[0] : unavialable_table[0]} />
							</td>
							<td><img className="stage" src="src\assets\stage.png" /></td>
						</tr>

						<tr>
							<td>
								<img onClick={() => { setimg(5) }} className="t6" src={full[5] && table[5] ? avialable_table[1] : unavialable_table[1]} />

							</td>
							<td colSpan={3} rowSpan={3} ><img className="kitchen" src="src\assets\kitchen.png" /></td>
							<td>
								<img onClick={() => { setimg(6) }} className="t4" src={full[6] && table[6] ? avialable_table[0] : unavialable_table[0]} />
							</td>
						</tr>
						<tr>
							<td>
								<img onClick={() => { setimg(7) }} className="t6" src={full[7] && table[7] ? avialable_table[1] : unavialable_table[1]} />
							</td><td>
								<img onClick={() => { setimg(8) }} className="t4" src={full[8] && table[8] ? avialable_table[0] : unavialable_table[0]} />
							</td>
						</tr>
						<tr>
							<td>
								<img onClick={() => { setimg(9) }} className="t6" src={full[9] && table[9] ? avialable_table[1] : unavialable_table[1]} />
							</td><td>
								<img onClick={() => { setimg(10) }} className="t4" src={full[10] && table[10] ? avialable_table[0] : unavialable_table[0]} />
							</td>
						</tr>
						<tr>
							<td>
								<img className="t4" src="src\assets\door.png" />

							</td>
							<td>
								<img onClick={() => { setimg(11) }} className="t6" src={full[11] && table[11] ? avialable_table[1] : unavialable_table[1]} />
							</td>
							<td>
								<img onClick={() => { setimg(12) }} className="t6" src={full[12] && table[12] ? avialable_table[1] : unavialable_table[1]} />
							</td>
							<td>
								<img onClick={() => { setimg(13) }} className="t4" src={full[13] && table[13] ? avialable_table[0] : unavialable_table[0]} />
							</td>
							<td>
							</td>
						</tr>
					</table>
					<div style={{ marginTop: "80px" }}>
						<div style={{ display: "flex", marginLeft: "auto", marginRight: "auto", width: "fit-content" }}>
							<div className="avaichair">AVAILABLE <br />  <br /> 	 <img src="../src/assets/available.png" alt="" /></div>
							<div className="avaichair">UNAVAILABLE  <br /> <br />  <img src="../src/assets/unavailable.png" alt="" /></div>
						</div>
						<input style={{ margin: "30px", cursor: "pointer" }} className="submit" type="button" value="reserve" onClick={() => {
							fetch("http://localhost:8080/booking", {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									"Authorization": "a"
								}, body: JSON.stringify(bookingData)
							}).then((Response) => {
								window.alert("จองสำเร็จ");
								window.location.href = `/?data=${encodeURIComponent(
									JSON.stringify({
										name: receivedData.name,
										role: receivedData.role
									})
								)}`;
							}
							)
							console.log(bookingData)
						}} />
					</div>

				</form>
			</div>
		</>
	);
}
export default App;