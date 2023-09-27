import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../../css/login.css';
import profile from "../../image/a.png";
import email from "../../image/email.jpg";
import pass from "../../image/pass.png";

function LoginUi() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      window.location.href = '/dashboard';
    } else {
      alert('Please enter both User email and Password.');
    }
  };

  return (
    <div className="main">
      <div className="sub_main">
        <div>
          <div className="imgs">
            <div className="container_image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="User Email"
                className="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="second_input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="Password"
                className="name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login_button">
              <button onClick={handleLoginClick}>Login</button>
            </div>
            <p className="link">
              <Link to="/forgot">Forgot password</Link> Or <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
