/* eslint-disable no-unused-vars */
import "./main.css";
import React, { useState } from "react";
import "./booknow.css";
import { useRef } from "react";


function App() {
  const usernamesignin = useRef(null);
  const passwordsignin = useRef(null);


  const usernamesignup = useRef(null);
  const passwordsignup = useRef(null);
  const fnamesignup = useRef(null);
  const lnamesignup = useRef(null);


  const [booking, setBooking] = useState(false);
  const [signup, setsignup] = useState(false);

  const showbook = () => {
    setBooking(!booking);
  };
  const showsignup = () => {
    setsignup(!signup);
    setBooking(!booking);
  };
  const closeall = () => {
    setsignup(false);
    setBooking(false);
  };

  return (
    <>
      <div className="container">
        <a className="" href="/">
          <img className="icon" src="../src/assets/logo.png" />
        </a>
        <div class="mybutton2">
          <button className="booknow" onClick={showbook}>
            SIGN IN
          </button>
        </div>
      </div>
      {booking && (
        <div className="modal">
          <div onClick={closeall} className="overlay"></div>
          <div className="modal-content" action="/booking" method="post">
            <form>
              <h1 className="bookhead">SIGN IN</h1>
              <div style={{ color: "#FFDE66", textAlign: "start" }}>
                username
              </div>
              <div className="onecul">
                <input
                  ref={usernamesignin}
                  id="username"
                  className="onecul"
                  type="text"
                />
              </div>
              <div style={{ color: "#FFDE66", textAlign: "start" }}>
                password
              </div>
              <div id="password" className="onecul">
                <input
                  ref={passwordsignin}
                  className="onecul"
                  type="password"
                />
              </div>
              <input
                onClick={() => {
                  fetch("http://localhost:8080/signin", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body:
                      usernamesignin.current.value +
                      " " +
                      passwordsignin.current.value,
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Network response was not ok");
                      }
                      return response.text(); // Process the response data as needed
                    })
                    .then((data) => {
                      if (data == "valid") {
                        // navigate("/" + usernamesignin.current.value, {
                        //   state: { id: 1, name: "sabaoon" },
                        // });
                        window.location.href = `/?data=${encodeURIComponent(
                          JSON.stringify({
                            name: usernamesignin.current.value,
                            role: 1,
                          })
                        )}`;
                      }
                      if (data == "invalid") {
                        window.alert("รหัสไม่ถูกต้องหรือไม่พบ username ในระบบ");
                      }
                    })
                    .catch((error) => {
                      console.error(
                        "There was a problem with the POST request:",
                        error
                      );
                    });
                }}
                className="reserve-btn"
                type="button"
                value="SIGN IN"
              />
              <input
                onClick={() => {
                  showsignup();
                }}
                style={{
                  marginLeft: "10px",
                  color: "black",
                  backgroundColor: "#FFDE66",
                }}
                className="reserve-btn"
                type="button"
                value="SIGN UP"
              />
            </form>
          </div>
        </div>
      )}
      {signup && (
        <div className="modal">
          <div onClick={closeall} className="overlay"></div>
          <div className="modal-content" action="/booking" method="post">
            <form>
              <h1 className="bookhead">SIGN UP</h1>
              <div style={{ color: "#FFDE66", textAlign: "start" }}>
                username
              </div>
              <div className="onecul">
                <input ref={usernamesignup} className="onecul" type="text" />
              </div>

              <div>
                <div style={{ color: "#FFDE66", textAlign: "start" }}>
                  Firstname&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Lastname
                </div>
                <input
                  ref={fnamesignup}
                  style={{ marginRight: "10px", width: "45%" }}
                  type="text"
                />
                <input
                  ref={lnamesignup}
                  style={{ marginLeft: "10px", width: "45%" }}
                  type="text"
                />
              </div>
              <div style={{ color: "#FFDE66", textAlign: "start" }}>
                password
              </div>
              <div className="onecul">
                <input
                  ref={passwordsignup}
                  className="onecul"
                  type="password"
                />
              </div>
              <div style={{ color: "#FFDE66", textAlign: "start" }}>
                confirm password
              </div>
              <div className="onecul">
                <input className="onecul" type="password" />
              </div>
              <input
                onClick={() => {
                  let userData = {
                    username: usernamesignup.current.value,
                    password: passwordsignup.current.value,
                    fname: fnamesignup.current.value,
                    lname: lnamesignup.current.value,
                  };
                  fetch("http://localhost:8080/signup", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body:
                      userData.username +
                      " " +
                      userData.password +
                      " " +
                      userData.fname +
                      " " +
                      userData.lname +
                      " " +
                      0 +
                      " " +
                      0 +
                      " " +
                      1,
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Network response was not ok");
                      }
                      return response.json(); // Process the response data as needed
                    })
                    .then((data) => {
                      console.log("User creation successful:", data);
                    })
                    .catch((error) => {
                      console.error(
                        "There was a problem with the POST request:",
                        error
                      );
                    });
                }}
                style={{
                  marginLeft: "10px",
                  color: "black",
                  backgroundColor: "#FFDE66",
                }}
                className="reserve-btn"
                type="submit"
                value="SIGN UP"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
