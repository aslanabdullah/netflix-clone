import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from "./LoginScreen";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import { getAuth } from "./firebase";
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';

function App() {
  const user = {name: "Ahmet"};
  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = getAuth().onAuthStateChanged((userAuth) => {

      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email
        }));
      } else {
        dispatch(logout);
      }
    });

    return unsubscribe;

  }, []);

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
