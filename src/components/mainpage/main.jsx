/* eslint-disable no-unused-vars */
import "./main.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./booknow.css";
import Header from "./header";
import Headerlogin from "./headerlogin";
import { useNavigate } from "react-router-dom";
import Preload from "../preload/preload";
const App = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const receivedData = JSON.parse(
    decodeURIComponent(searchParams.get("data") || "{}")
  );
  console.log(receivedData.name);
  return (
    <div style={{ width: "100%" }}>
      <Preload />
      {receivedData.role == 1 ? <Header /> : <Headerlogin />}
      <div className="containerpic">
        <img
          style={{ opacity: "0.7" }}
          className="mainpic"
          src="src\assets\mainpic.jpg"
        />
        <div className="centered">FOR RES</div>
      </div>
      <hr
        style={{
          width: "200px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      />

      <div>
        <p className="abtus"> ABOUT US</p>
        <p className="abtus-">
          At Forres, we believe that dining is not merely about sustenance its
          an art form, a celebration of{" "}
        </p>
        <p className="abtus-">
          flavors, a symphony of textures. Join us on this culinary adventure
        </p>
        <p className="abtus-">
          and let us redefine your perception of fine dining.
        </p>
        <p className="abtus--">
          {" "}
          Cooking is a labor of love, a willingness to give of yourself and your
          time.
        </p>
      </div>
      <hr style={{ width: "200px", marginLeft: "auto", marginRight: "auto" }} />
      <div className="course">
        <p className="abtus"> COURSE</p>

        <div class="flex-container">
          <div>
            <a href="/premium">
              <img src="src\assets\steak.png" alt="" />
              <span>PREMIUM COURSE</span>
            </a>
          </div>
          <div>
            <a href="/alaska">
              <img src="src\assets\white.png" alt="" />
              <span>ALASKA COURSE</span>
            </a>
          </div>
          <div>
            <a href="/izakaya">
              <img src="src\assets\japan.png" alt="" />
              <span>IZAKAYA COURSE</span>
            </a>
          </div>
          <div>
            <a href="/stir">
              <img src="src\assets\frech.png" alt="" />
              <span>STIR COURSE</span>
            </a>
          </div>
          <div>
            <a href="/dimsum">
              <img src="src\assets\chinese.png" alt="" />
              <span>DIMSUM COURSE</span>
            </a>
          </div>
          <div>
            <a href="/yakiniku">
              <img src="src\assets\brown.png" alt="" />
              <span>YAKINIKU COURSE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
