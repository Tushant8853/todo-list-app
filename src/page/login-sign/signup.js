import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/signup.css';
import profile from '../../image/a.png';
import email from '../../image/email.jpg';
import pass from '../../image/pass.png';

function Sign_Up() {
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleSignUpClick = () => {
    if (emailInput.trim() !== '' && nameInput.trim() !== '' && passwordInput.trim() !== '') {
      window.location.href = '/dashboard';
    } else {
      alert('Please fill in all fields.');
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
            <h1>SignUp Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="User Email"
                className="name"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className='user_name'>
              <img src={profile} alt="profile" className="profile_user_name" />
              <input
                type='name'
                placeholder='Name'
                className='name'
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
              />
            </div>
            <div className="second_input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="User Password"
                className="name"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
            </div>
            <div className="login_button">
              <button onClick={handleSignUpClick}>Sign Up</button>
            </div>
            <p className="link">
              <Link to="/">Already have an account?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_Up;
