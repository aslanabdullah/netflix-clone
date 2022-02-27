import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from "./LoginScreen";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  const user = {name: "Ahmet"};
  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (<LoginScreen/>) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="invoices" element={<HomeScreen />} />
          </Routes>
        )}      
      </BrowserRouter>
    </div>
  );
}

export default App;
