import React from 'react';
import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  
    function handleSubmit(event) {
      event.preventDefault();
  
      
    }

    return (
      <div className="logon_container" >
        <section className="form">
  
          <form className="form" onSubmit={handleSubmit} >
            <i className="user"><FaUser /></i>
            <h1 className="login_title">Login</h1>
            <input
              type="email"
              placeholder="E-mail"
              className="inputLogin"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="inputLogin"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
            />
            <Link to='/list' className='btn'>
                <button className="button" type="submit">Entrar</button>
            </Link>
          </form>
  
        </section>
      </div >
    );
  }
