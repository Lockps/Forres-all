import React, { useEffect } from "react";
import { preLoaderAnim } from "./anima";
import './preload.css'
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>FOR</span>
        <span>RES</span>
      </div>
    </div>
  );
};

export default PreLoader;