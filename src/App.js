import { BrowserRouter, Routes,Route } from "react-router-dom";
import './App.css';
import React from 'react';
import CustReg from './CustomerRegistration/CustReg';
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
   <div className="App">
  
   <LoginPage/>
  
   </div>
  );
}

export default App;
