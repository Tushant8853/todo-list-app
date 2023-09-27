import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginUi from './page/login-sign/login';
import Signup from './page/login-sign/signup';
import Forgot from './page/login-sign/forgot'
import { TodoWrapper } from './page/toDoList-components/TodoWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUi />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/dashboard" element={<TodoWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
