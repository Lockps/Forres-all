import Header from '../mainpage/headerstaff'
import "./menu.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPenToSquare } from '@fortawesome/free-solid-svg-icons'


export default function App() {
    const [editting, setEdigting] = useState(false);

    const showeditting = () => {
        setEdigting(!editting)
    }
    const searchParams = new URLSearchParams(window.location.search);
    const receivedData = JSON.parse(
        decodeURIComponent(searchParams.get("data") || "{}")
    );
    return (
        <>
            <Header />
            <div className='nametable'> Table 1 : Premium Courses</div>
            <div className='showdetail'>
                <img style={{ width: "fit-content", borderRadius: "20px" }} src="../src/assets/white.png" alt="" />
                <div className='textdetail'>
                    <p></p><br />
                    <p>Current menu  :  PAN SEARED SEA BASS</p><br />
                    <p>Chef  :  Pachara Phetshee</p><br />
                    <p>Kitchen  :  Station 2</p><br />
                    <p>Customer Name  :  Wannaporn  Taechabunnaput</p>
                </div>
            </div>
            <div>
                <div className='detailofcourse doing'>PAN SEARED SEA BASS</div>
                <div className='detailofcourse'>ROASTED LAMB RUMP <button class="editbutton" onClick={showeditting}><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#B68D40", }} /></button></div>
                <div className='detailofcourse'>SOUTHERN PECAN PIE <button class="editbutton"><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#B68D40", }} /></button></div>
                <div className='detailofcourse'>SOUTHERN PECAN PIE <button class="editbutton"><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#B68D40", }} /></button></div>
                <div className='detailofcourse'>BANANAS FOSTER <button class="editbutton"><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#B68D40", }} /></button></div>
                <div className='detailofcourse'>RASTRAMI ROLL <button class="editbutton"><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#B68D40", }} /></button> </div>
                <div className='detailofcourse'>FRIED CALAMARI <button class="editbutton"><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#B68D40", }} /></button></div>
                <div className='detailofcourse'>PEACHY JALAPENO GUACAMOLE <button class="editbutton"><FontAwesomeIcon icon={faPenToSquare} style={{ color: "#B68D40", }} /></button></div>
                <div className='detailofcourse finish'>BRAISED OX CHEEK RAVIOLI </div>
                <div className='detailofcourse finish'>KING PRAWNS AND LOBSTER </div>
                <div className='detailofcourse finish'>BEEF BURGER MEAL </div>
                <div className='detailofcourse finish'>NDUJA PORK CHICKEN TERRINE </div>
            </div>
            <div style={{ width: "fit-content", marginLeft: "auto", marginRight: "auto" }}>
                <button style={{ cursor: "pointer" }} className='leftcus' onClick={() => {
                    window.location.href = `/staff?data=${encodeURIComponent(
                        JSON.stringify({
                            table: receivedData.table,
                        })
                    )}`;

                }}>ลูกค้าออกไปแล้ว</button>
            </div>
            {editting && (<div className="modal">
                <div onClick={showeditting} className="overlay"></div>
                <div style={{ backgroundColor: "#122620", width: "500px" }} className="modal-content" action="/booking" method="post">
                    <form>
                        <div className='showdetail'>
                            <img style={{ width: "", height: "200px", borderRadius: "20px" }} src="../src/assets/white.png" alt="" />
                            <div style={{ marginLeft: "33px", marginTop: "auto", textAlign: "start", color: "white", marginBottom: "auto" }}>
                                <input type="checkbox" name="" id="" />Grilled lamb cutlets<br />
                                <input type="checkbox" name="" id="" />Pomegranate glaze<br />
                                <input type="checkbox" name="" id="" />Butternut squash<br />
                            </div>
                        </div>
                        <div>
                            <select style={{ width: "94.2%", backgroundColor: "#FFDE66", borderRadius: "1px", height: "20px", marginTop: "20px" }} form="carform">
                                <option value="PREMIUM">PREMIUM COURSE</option>
                                <option value="ALASKA">ALASKA COURSE</option>
                                <option value="IZAKAYA">IZAKAYA  COURSE</option>
                                <option value="STIR">STIR COURSE</option>
                                <option value="DIM-SUM">DIM-SUM COURSE</option>
                                <option value="YAKINIKU">YAKINIKU COURSE</option>
                            </select>
                        </div>
                        <input className="reserve-btn" type="submit" value="OK" />
                        <input className="reserve-btn" style={{ marginLeft: "15px" }} type="button" onClick={() => {
                        }} value="CANCEL" />
                    </form>
                </div>
            </div>)}
        </>
    );
}