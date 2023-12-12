import "./main.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./booknow.css";

function App() {
    const [booking, setBooking] = useState(false);

    const showbook = () => {
        setBooking(!booking)
    }
    const searchParams = new URLSearchParams(window.location.search);
    const receivedData = JSON.parse(
        decodeURIComponent(searchParams.get("data") || "{}")
    );
    return (
        <>

            <div class="container">
                <a className="" href="/staff"><img className="icon" src="../src/assets/logo.png" /></a>
                <div class="mybutton2">
                    <a className="name1" href="/profile">{receivedData.name}</a>
                </div>
            </div>
        </>
    );
}
export default App;