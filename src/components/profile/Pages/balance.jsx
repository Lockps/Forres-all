import './balance.css';
import "../components/modal.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'
import Header from '../../mainpage/header'
import { useRef } from 'react';
export default function Balance() {
  const topup = useRef(null);
  const [top, setTop] = useState(false);
  const toggleModal4 = () => {
    console.log('asd')
    setTop(!top);
  };

  const searchParams = new URLSearchParams(window.location.search);
  const receivedData = JSON.parse(
    decodeURIComponent(searchParams.get("data") || "{}")
  );
  let dataTopup = [
    { paymentid: 133223, amount: 10000000, date: "22/2/12", status: "success" },
    { paymentid: 133225, amount: 32000000, date: "23/2/12", status: "fail" }
  ]

  const [presentBalance, setPresentBalance] = useState(receivedData.balance)
  fetch(`http://localhost:8080/getbalance/${receivedData.name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP ERROR : ${response.status}`)
      }
      return response.json()
    }).then(input => {
      setPresentBalance(input)
    })
  return (
    <><Header /><div className='balance'>
      <div className='boxx'>
        <div className='pay'>
          <div>Your Balance</div>
        </div>

        <div className='pay1'>
          <div>{presentBalance.toLocaleString()} $</div>
          <button className='depo' onClick={() => { toggleModal4(); }}>TOP UP</button>
        </div>
      </div>


      {top && (
        <div className="modal1">

          <div className="overlay"></div>
          <div className="modal-content1" style={{ width: "350px", height: "200px", paddingBottom: "20px", paddingTop: "70px" }}>

            <div className='top'>
              <div className="close-modal"><button onClick={toggleModal4}>
                <FontAwesomeIcon icon={faXmark} />
              </button></div>
              <div style={{ textAlign: "center" }} className='txt1'>ใส่จำนวนเงิน</div>
              <div className='ton'>
                <input ref={topup} className='banshe' type="number" />
                <input className='term1' type="button" value="เติมเงิน" onClick={() => {
                  fetch(`http://localhost:8080/getbalance/${receivedData.name}`)
                    .then(response => {
                      if (!response.ok) {
                        throw new Error(`HTTP ERROR : ${response.status}`)
                      }
                      return response.json()
                    }).then(a => {
                      let x = parseInt(a, 10) + parseInt(topup.current.value, 10);
                      fetch("http://localhost:8080/update/0/" + receivedData.name + "/6/" + x, {
                        method: "Get",
                        headers: {
                          "Content-Type": "application/json"
                        }
                      })
                    })


                }} />

              </div>

            </div>
          </div>
        </div>
      )}

      <div className='history'>
        <div className='txt'>History</div>

        <div className='table-container'>
          <table className='table'>
            <thead>
              <tr>
                <th>PaymentId</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dataTopup.map(row => (
                <tr key={row.id}>
                  <td>{row.paymentid}</td>
                  <td>{row.amount}</td>
                  <td>{row.date}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='aaa'>
        <a href="/profile">
          <div className='backbutton-container'>
            <button className='backbutton'>
              Back
            </button>
          </div>
        </a>
      </div>

    </div></>
  );
}