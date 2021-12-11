import React, { useState, useEffect } from 'react'

import logo from './logo.svg';
import './App.css';
import { Dashboard } from './front/pages/dashboard';

export function App() {
  return (
    <div className="App">
      {/* <h1>Login Page</h1> */}
      <Dashboard />
    </div>
  );
}


