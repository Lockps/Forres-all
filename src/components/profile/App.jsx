import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping, faDollarSign, faXmark } from '@fortawesome/free-solid-svg-icons'
import "./components/modal.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../mainpage/header'
import ReactDOM from 'react-dom/client'

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const receivedData = JSON.parse(
    decodeURIComponent(searchParams.get("data") || "{}")
  );
  let dataProfile = {
    point: receivedData.point,
    coupon: ["special", "10per"]
  }
  const [modal, setModal] = useState(false);
  const [buy, setBuy] = useState(false);
  const [yes, setYes] = useState(false);


  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal2 = () => {
    setBuy(!buy);
  };

  const toggleModal3 = () => {
    setYes(!yes);
  };
  const closeall = () => {
    setModal(false);
    setBuy(false);
    setYes(false);
  };

  return (
    <><Header />
      <div className="App1">
        <img className='img-Profile' src='../src/components/images/Profile.png' />

        <div className='icon-container1'>
          <h1 className='text1'> {
            dataProfile.point
          } POINTS </h1>
          <button className='icon-button1'><FontAwesomeIcon onClick={toggleModal} icon={faCartShopping} /></button>
        </div>

        {buy && (
          <div className="modal1">

            <div className="overlay"></div>
            <div className="modal-content1" style={{ width: "350px", height: "100px", paddingBottom: "10px", paddingTop: "50px" }}>


              <div className='accept'> Do you want to use this voucher?</div>
              <div className='choose'>
                <button className='BUT' onClick={() => { toggleModal2(); toggleModal3() }}> yes </button>
                <button className='BUT' onClick={() => { toggleModal(); toggleModal2() }}> no </button>
              </div>


            </div>
          </div>
        )}

        {yes && (
          <div className="modal1">

            <div className="overlay" onClick={closeall}></div>
            <div className="modal-content1" style={{ width: "450px", height: "fit-content", paddingBottom: "20px", paddingTop: "70px" }}>

              <div className='qr'>
                <div>Use voucher for make 30% discount</div><br />
                <img className='img1' src='../src/components/images/QR.png' /> <br />
                <div>Use by pachara</div><br />

              </div>
            </div>
          </div>
        )}

        {modal && (

          <div className="modal1">

            <div className="overlay"></div>
            <div className="modal-content1">

              <div className='ten'>
                <img className='img-tenper' src='../src/components/images/10per.png' />
                <button className='buy-button' onClick={() => { toggleModal(); toggleModal2() }}>
                  BUY 500
                </button>
              </div>

              <div className='ten'>
                <img className='img-tenper' src='../src/components/images/special.png' />
                <button className='buy-button' onClick={() => { toggleModal(); toggleModal2() }}>
                  BUY 1,000
                </button>
              </div>

              <div className='ten'>
                <img className='img-tenper' src='../src/components/images/free.png' />
                <button className='buy-button' onClick={() => { toggleModal(); toggleModal2() }}>
                  BUY 100
                </button>
              </div>

              <button className="close-modal" onClick={toggleModal}>
                <FontAwesomeIcon icon={faXmark} />
              </button>

            </div>

          </div>
        )}


        <div className="choice-container">
          <button onClick={() => {
            fetch(`http://localhost:8080/getbalance/${receivedData.name}`)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP ERROR : ${response.status}`)
                }
                return response.json()
              }).then(input => {
                window.location.href = `/profile/balance?data=${encodeURIComponent(
                  JSON.stringify({
                    name: receivedData.name,
                    balance: input,
                    role:receivedData.role
                  })
                )}`;
              })

          }} className="choice-item">BALANCE</button>
          <div className="choice-item"> | </div>
          <a href="/profile/editPage"><button className="choice-item">EDIT</button></a>
          <div className="choice-item"> | </div>
          <a href="/profile/history"><button className="choice-item">HISTORY</button></a>
        </div>

        <div className='coupons-container'>
          {dataProfile.coupon.map((value, index) => (
            <div key={index} className='cou' >
              <img className='coupon' src={`../src/components/images/${value}.png`} alt='Coupon 1' />
            </div>

          ))}
        </div>

      </div></>
  );
}

export default App