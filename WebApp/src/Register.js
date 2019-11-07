import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Register() {
  return (
    <div className="Register">
        <div className="RegisterBox">
            
            <h3>Register</h3>
            <p>Register your account to connect with us.</p>
           
            <div className="RegisterTextBox">
                <input type="text"  name="lastname" placeholder="Lastname"/>
                <i class="fas fa-user"></i>
            </div>
            <div className="RegisterTextBox">
                <input type="text"  name="firstname" placeholder="Firstname"/>
                <i class="fas fa-user"></i>
            </div>
            <div className="RegisterTextBox">
                <input type="text"  name="mail" placeholder="Email"/>
                <i class="fas fa-envelope"></i>
            </div>
            <div className="RegisterTextBox">
                <input type="password"  name="pwd" placeholder="Password"/>
                <i class="fas fa-lock"></i>
            </div>
            <div className="RegisterTextBox">
                <input type="password"  name="pwd-repeat" placeholder="Confirm Password"/>
                <i class="fas fa-lock"></i>
            </div>
            <div className="RegisterButton">
                <input className="RegisterBtn" type="submit" name="signup-submit" value="Register"/>
            </div>
        
            <div className="RegisterText">Already have an account? 
                <Link className="ListStyle" to='/Login'>
                    <b>Login</b>
                </Link>
            </div>
            
        </div>
    </div>
  );
}

export default Register;
