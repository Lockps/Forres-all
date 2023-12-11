/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from './components/mainpage/header'
import { useNavigate } from 'react-router-dom';
const App =()=> {
    const navigate = useNavigate();

    const goToNextPage = () => {
      // Replace '/next-page' with the path you want to navigate to
      navigate('/profile');
    };
    
    setTimeout(() => {
        // Replace '/next-page' with the path you want to navigate to
        goToNextPage()
      }, 3000);
    return (

        <div style={{ width: "100%" }}>
            
        </div>
    );
}
export default App;

