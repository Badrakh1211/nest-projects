
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './login.css';
import { Link, useNavigate } from "react-router-dom"
import { App } from './page'

const Login = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [log, setLog] = useState([])

  const instance = axios.create({
    baseURL: 'https://back-end-lyart.vercel.app/',
  })

  const refUser = useRef(null)
  const refPass = useRef(null)
  const navigate = useNavigate()
  const Check = async () => {
    const login = await instance.post('/login', { username: refUser.current.value, password: refPass.current.value })
    console.log(login)
    if (login.status === 200) {
      navigate("/instagram")
      localStorage.setItem('uid', login.data.username)
    } else {
      navigate("/")
    }
  }
  return (
    <div className='container'>
      <div className='card'>
        <img className="word" src={require("./img/2-27715_instagram-png-logo-instagram-word-logo-png.png")} ></img>
        <input ref={refUser} className="user" placeholder='Username'></input>
        <input ref={refPass} className="pass" placeholder='Password' type="password"></input>
        <button className='signin' onClick={Check}>
          Login
        </button>
        <img className="store" src={require('./img/apple-app-store-travel-awards-globestamp-7.png')}></img>
        <Link className='login' to={'/sign'}>Don't have a account?</Link>
      </div>
    </div>
  );
}

export default Login;