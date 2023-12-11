import "./main.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./booknow.css";
import "./header.css";
import { useRef } from "react";
const searchParams = new URLSearchParams(window.location.search);
const receivedData = JSON.parse(
  decodeURIComponent(searchParams.get("data") || "{}")
);
function App() {
  let datebooking = useRef(null);
  let timebooking = useRef(null);
  let carbooking = useRef(null);
  let peoplebooking = useRef(null);
  let coursebooking = useRef(null);

  const [booking, setBooking] = useState(false);
  const showbook = () => {
    setBooking(!booking);
  };

  return (
    <>
      <div class="container">
        <a className="" href="/">
          <img className="icon" src="../src/assets/logo.png" />
        </a>
        <div class="mybutton2">
          <button className="booknow" onClick={showbook}>
            BOOK
          </button>
          <a className="name1" href="/profile">
            {receivedData.role == 1 ? receivedData.name : <span>hello</span>}
          </a>
        </div>
      </div>

      {booking && (
        <div className="modal">
          <div onClick={showbook} className="overlay"></div>
          <div className="modal-content" action="/booking" method="post">
            <form action="/booking">
              <h1 className="bookhead">BOOKING</h1>
              <div style={{ color: "#FFDE66", textAlign: "start" }}>
                &ensp;&nbsp;DATE&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;TIME
              </div>

              <div>
                <input
                  ref={datebooking}
                  style={{
                    backgroundColor: "#FFDE66",
                    width: "165px",
                    borderRadius: "8px",
                  }}
                  type="date"
                />
                <input
                  ref={timebooking}
                  style={{
                    backgroundColor: "#FFDE66",
                    width: "165px",
                    borderRadius: "8px",
                  }}
                  type="time"
                />
              </div>
              <div style={{ color: "#FFDE66", textAlign: "start" }}>
                &ensp;&nbsp;CARS&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;PEOPLE
              </div>

              <div>
                <input
                  ref={carbooking}
                  style={{
                    backgroundColor: "#FFDE66",
                    borderRadius: "8px",
                    width: "162px",
                  }}
                  type="text"
                />
                <input
                  ref={peoplebooking}
                  style={{
                    backgroundColor: "#FFDE66",
                    borderRadius: "8px",
                    width: "162px",
                  }}
                  type="text"
                />
              </div>
              <div style={{ color: "#FFDE66", textAlign: "start" }}>
                &ensp;&nbsp;COURSE
              </div>

              <div>
                <select
                  style={{
                    width: "94.2%",
                    backgroundColor: "#FFDE66",
                    borderRadius: "8px",
                  }}
                  form="carform"
                  ref={coursebooking}
                >
                  <option value="PREMIUM">PREMIUM COURSE -฿35,000</option>
                  <option value="ALASKA">ALASKA COURSE -฿46,000</option>
                  <option value="IZAKAYA">IZAKAYA COURSE -฿37,000</option>
                  <option value="STIR">STIR COURSE -฿45,000</option>
                  <option value="DIM-SUM">DIM-SUM COURSE -฿42,000</option>
                  <option value="YAKINIKU">YAKINIKU COURSE -฿30,000</option>
                </select>
              </div>

              <input
                className="reserve-btn"
                type="button"
                value="reserve"
                onClick={() => {
                  let data = {
                    name: receivedData.name,
                    date: datebooking.current.value,
                    time: timebooking.current.value,
                    car: carbooking.current.value,
                    people: peoplebooking.current.value,
                    course: coursebooking.current.value,
                  };
                  window.location.href = `/booking?data=${encodeURIComponent(
                    JSON.stringify(data)
                  )}`;
                  //   fetch("http://localhost:8080/testapifb", {
                  //     method: "POST",
                  //     headers: {
                  //       "Content-Type": "application/json",
                  //     },
                  //     body: data,
                  //   })
                  //     .then((response) => {
                  //       if (!response.ok) {
                  //         throw new Error("Network response was not ok");
                  //       }
                  //       return response.json(); // Process the response data as needed
                  //     })
                  //     .then((data) => {
                  //       console.log("User creation successful:", data);
                  //     })
                  //     .catch((error) => {
                  //       console.error(
                  //         "There was a problem with the POST request:",
                  //         error
                  //       );
                  //     });
                }}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
