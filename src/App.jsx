import React, { useState } from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/Login';
import { useStateValue } from './context/StateProvider';

const App = () => {

    const [{ user }, dispatch] = useStateValue();    
    console.log(user)
    return (
        <Router>
            <Routes>
                <Route path="/" element={user?<Home />:<Navigate to ="/login" />} />
                <Route path="/login" element={!user?<Login />:<Navigate to="/" />} />    
            </Routes>
        </Router>
    )
}

export default App